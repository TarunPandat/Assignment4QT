import {View, Text, ActivityIndicator, FlatList} from 'react-native'
import React from 'react'
import mainStyles from '../../../styles'
import ArrowLeft from '../../../assets/icons/arrow-left.svg'
import {post} from '../../../services/apiServices'
import {API} from '../../../config/config'
import {useSelector} from 'react-redux'
import {RootStateType} from '../../../redux/reducers'
import {Colors} from '../../../constants'
import {useNavigation} from '@react-navigation/native'
import AttendanceDetailCard from '../components/AttendanceDetailCard'

interface Props {
  route: {
    params: any
  }
}

const AttendanceList = ({route: {params}}: Props) => {
  const [data, setData] = React.useState<any>({
    result: [],
    isLoading: true,
    error: null,
  })

  const [open, setOpen] = React.useState<any>(0)

  const {goBack}: any = useNavigation()

  const {user, token} = useSelector(({auth}: RootStateType) => auth)

  const {month, year} = params
  const getList = async () => {
    const payload = {
      month,
      year,
      hRuserId: user?.hRuserId,
    }
    const {result, error} = await post(API.attendanceReport, payload, {
      headers: {Authorization: `Bearer ${token}`},
    })

    setData({...data, result, error, isLoading: false})
  }

  React.useEffect(() => {
    getList()
  }, [])

  const onToggle = (index: number) => {
    setOpen(open === index ? null : index)
  }

  return (
    <View style={mainStyles.container}>
      <View style={[mainStyles.row, mainStyles.alignCenter, mainStyles.p5]}>
        <ArrowLeft style={[mainStyles.mr5]} onPress={goBack} />
        <Text>Employee Attendance List</Text>
      </View>
      {data?.isLoading ? (
        <View style={[mainStyles.container, mainStyles.center]}>
          <ActivityIndicator color={Colors.blue} />
        </View>
      ) : (
        <View style={[mainStyles.container, mainStyles.p5]}>
          <FlatList
            data={data?.result?.attendenceList || []}
            renderItem={({item, index}) => (
              <AttendanceDetailCard
                loginDetails={item}
                sn={index + 1}
                onToggle={() => onToggle(index)}
                open={open === index}
              />
            )}
            keyExtractor={item => item?.loginDate}
            ItemSeparatorComponent={() => <View style={mainStyles.py4} />}
            ListEmptyComponent={() => (
              <View style={mainStyles.center}>
                <Text style={mainStyles.title}>No Data Found</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  )
}

export default AttendanceList
