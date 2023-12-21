import {View, Text, TextInput, ScrollView, Alert} from 'react-native'
import React from 'react'
import mainStyles from '../../../styles'
import {Colors} from '../../../constants'
import {mergeStyles} from '../../../utils/helperMethods'
import Camera from '../../../assets/icons/camera.svg'
import Button from '../../../components/Button'
import AttendanceDetailCard from '../components/AttendanceDetailCard'
import AttendanceListModal from '../components/AttendanceListModal'
import {post} from '../../../services/apiServices'
import {API} from '../../../config/config'
import {useSelector} from 'react-redux'
import {RootStateType} from '../../../redux/reducers'
import {launchCamera} from 'react-native-image-picker'
import ThreeDot from '../../../assets/icons/three-dot.svg'

const Attendance = () => {
  const [modal, setModal] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [remark, setRemark] = React.useState('')
  const [data, setData] = React.useState<any>({
    result: {empDetails: {}, loginDetails: {}},
    error: null,
    isLoading: true,
  })

  const {user, token} = useSelector(({auth}: RootStateType) => auth)

  const box = mergeStyles(mainStyles.brd5, mainStyles.p5, {
    backgroundColor: Colors.white,
  })

  const remarkBox = mergeStyles(
    mainStyles.brd5,
    mainStyles.mt5,
    mainStyles.p5,
    {height: 80, backgroundColor: Colors.white},
  )

  const getDetails = async () => {
    const {result, error} = await post(
      API.attendanceDetails,
      {
        hRuserId: user?.hRuserId,
      },
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    )

    setData({...data, result, error, isLoading: false})
  }

  React.useEffect(() => {
    getDetails()
  }, [])

  const postAttendance = async () => {
    setIsLoading(true)
    const pic = await launchCamera({
      mediaType: 'photo',
      cameraType: 'front',
    })

    if (pic?.assets) {
      let payload = {
        hRuserId: user?.hRuserId,
        loginAction: loginDetails?.logoutEnabled ? 'out' : 'in',
        remarks: remark,
        location: 'Un available',
        photo: pic?.assets[0]?.originalPath,
        photoFormat: pic?.assets[0]?.type,
      }
      const {result, error} = await post(API.postAttendance, payload, {
        headers: {Authorization: `Bearer ${token}`},
      })

      if (result) {
        setRemark('')
        getDetails()
        if (result?.message) {
          Alert.alert('', result?.message)
        }
      }

      setData({...data, result, error, isLoading: false})
    }
    setIsLoading(false)
  }

  const {empDetails = {}, loginDetails = {}} = data?.result || {}

  // const loginDetails = {
  //   logDate: '19 Dec 2023',
  //   loginEnabled: false,
  //   loginLocation: '',
  //   loginPhoto: 'https://erplead.remserp.com/images/Profile/no_photo.jpg',
  //   loginRemarks: 'sese',
  //   loginTime: '10:00 AM',
  //   logoutEnabled: false,
  //   logoutLocation: '',
  //   logoutPhoto: 'https://erplead.remserp.com/images/Profile/no_photo.jpg',
  //   logoutRemarks: '',
  //   logoutTime: '09:00 PM',
  //   showLoginData: false,
  //   showLogoutData: false,
  //   workingTimeCompleted: '09 Hr :  10 Min',
  //   workingTimeRequired: '09 Hr : 00 Min',
  // }

  return (
    <ScrollView>
      <View style={[mainStyles.container, mainStyles.py10, mainStyles.px5]}>
        <View
          style={[
            mainStyles.row,
            mainStyles.spaceBetween,
            mainStyles.alignCenter,
            mainStyles.mb5,
          ]}>
          <Text>Employee Attendance</Text>
          <ThreeDot onPress={() => setModal(true)} />
        </View>
        <View style={box}>
          <View style={mainStyles.row}>
            <View style={mainStyles.container}>
              <View style={mainStyles.mb10}>
                <Text style={[mainStyles.title, mainStyles.mb1]}>
                  Emplyee Name
                </Text>
                <Text style={mainStyles.description}>
                  {empDetails?.employeeName}
                </Text>
              </View>
            </View>
            <View style={mainStyles.container}>
              <View style={mainStyles.mb10}>
                <Text style={[mainStyles.title, mainStyles.mb1]}>Date</Text>
                <Text style={mainStyles.description}>
                  {empDetails?.currentDateTime}
                </Text>
              </View>
            </View>
          </View>

          <View style={mainStyles.row}>
            <View style={mainStyles.container}>
              <View style={mainStyles.mb10}>
                <Text style={[mainStyles.title, mainStyles.mb1]}>
                  Department
                </Text>
                <Text style={mainStyles.description}>
                  {empDetails?.employeeDept}
                </Text>
              </View>
            </View>
            <View style={mainStyles.container}>
              <View style={mainStyles.mb10}>
                <Text style={[mainStyles.title, mainStyles.mb1]}>
                  Designation
                </Text>
                <Text style={mainStyles.description}>
                  {empDetails?.employeeDesignation}
                </Text>
              </View>
            </View>
          </View>

          <View style={mainStyles.row}>
            <View style={mainStyles.container}>
              <View style={mainStyles.mb10}>
                <Text style={[mainStyles.title, mainStyles.mb1]}>Location</Text>
                <Text style={mainStyles.description}>
                  {empDetails?.employeeAddress}
                </Text>
              </View>
            </View>
            <View style={mainStyles.container}>
              <View style={mainStyles.mb10}>
                <Text style={[mainStyles.title, mainStyles.mb1]}>
                  Employee Code
                </Text>
                <Text style={mainStyles.description}>
                  {empDetails?.employeeCode}
                </Text>
              </View>
            </View>
          </View>

          <View style={mainStyles.row}>
            <View style={mainStyles.container}>
              <View>
                <Text style={[mainStyles.title, mainStyles.mb1]}>
                  Batch Timing
                </Text>
                <Text style={mainStyles.description}>
                  {empDetails?.batchTiming}
                </Text>
              </View>
            </View>
            <View style={mainStyles.container}>
              <View>
                <Text style={[mainStyles.title, mainStyles.mb1]}>
                  Total Time
                </Text>
                <Text style={mainStyles.description}>
                  {empDetails?.totalTime}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={mainStyles.mt10}>
          <Text style={[mainStyles.title]}>Remarks</Text>
          <View style={remarkBox}>
            <TextInput
              value={remark}
              onChangeText={value => setRemark(value)}
              placeholder="Write remarks here..."
              style={{fontSize: 12}}
            />
          </View>
        </View>
        {(loginDetails?.logoutEnabled || loginDetails?.loginEnabled) && (
          <View style={[mainStyles.center, mainStyles.mt10]}>
            <View style={{width: '40%'}}>
              <Button
                title={loginDetails?.logoutEnabled ? 'Time Out' : 'Time In'}
                onPress={postAttendance}
                icon={<Camera style={mainStyles.mr4} />}
                isLoading={isLoading}
              />
            </View>
          </View>
        )}

        {(loginDetails?.loginTime !== '--' ||
          loginDetails?.logoutTime !== '--') && (
          <View style={mainStyles.mt10}>
            <Text style={[mainStyles.title, mainStyles.mb5]}>
              Employee Attendance Details
            </Text>
            <AttendanceDetailCard loginDetails={loginDetails} />
          </View>
        )}

        <AttendanceListModal visible={modal} onClose={() => setModal(false)} />
      </View>
    </ScrollView>
  )
}

export default Attendance
