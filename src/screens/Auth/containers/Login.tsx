import {View, Text, Image, useWindowDimensions, Platform} from 'react-native'
import React from 'react'
import mainStyles from '../../../styles'
import {Colors, Images} from '../../../constants'
import styles from '../styles'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/actions/authActions'
import { RootStateType } from '../../../redux/reducers'

interface LoginProps {
  route: {
    params: any
  }
}

const Login = ({route: {params}}: any) => {

  const [form, setForm] = React.useState({
    username: '',
    password: ''
  })

  const userRef = React.useRef<any>()
  const passRef = React.useRef<any>()

  const {isLoading, error} = useSelector(({auth}: RootStateType) => auth)

  const {height} = useWindowDimensions()

  const dispatch: any = useDispatch()

  const onChange = (name: string, value: string) => {
    setForm({...form, [name]: value})
  }

  const onSubmit = () => {
    if(!form?.username) {
      userRef?.current?.focus && userRef?.current?.focus()
    }
    else if(!form?.password) {
      passRef?.current?.focus && passRef?.current?.focus()
    }
    else {
      dispatch(login({
        userName: form?.username,
        password: form?.password,
        deviceType: Platform.OS,
        fcmToken: "fcmToken", //Not mentioned in email to integrate Firebase
        ipAddress: "ip", // Same with this
        location: "unknown", // Same with this and also it required Paid Google API KEY
        ekey: params?.ekey
      }))
    }
  }

  return (
    <View style={[mainStyles.container, mainStyles.center]}>
      <View style={[mainStyles.container, mainStyles.center, mainStyles.w100]}>
        <View
          style={[
            mainStyles.spaceAround,
            mainStyles.alignCenter,
            mainStyles.w100,
            mainStyles.px6,
            {height: height * 0.6},
          ]}>
          <Image source={Images.logo} style={styles.logo} resizeMode='contain' />

          <View
            style={[
              mainStyles.b1,
              mainStyles.brd2,
              mainStyles.w100,
              styles.formBox,
              mainStyles.p10,
              mainStyles.alignCenter,
            ]}>
            <Text style={mainStyles.heading}>Login</Text>
            <View style={mainStyles.mt10}>
              <Input autoCorrect={false} ref={userRef} autoCapitalize="none" placeholder="Username" icon={Images.user} value={form?.username} onChangeText={(value) => onChange('username', value)} />
            </View>
            <View style={mainStyles.my10}>
              <Input autoCorrect={false} ref={passRef} autoCapitalize="none" placeholder="Password" icon={Images.lock} value={form?.password}  onChangeText={(value) => onChange('password', value)}  />
            </View>
            <View style={[mainStyles.w100, mainStyles.mb10]}>
              <Button
                title="SUBMIT"
                onPress={onSubmit}
                isLoading={isLoading}
                isDisabled={isLoading}
              />
              <View style={mainStyles.center}>
                {error && (
                  <Text style={[mainStyles.title, mainStyles.my2, {color: Colors.red}]}>
                    {error?.message || 'Something went wrong'}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={mainStyles.mb10}>
        <Text style={styles.text}>Powered By: 4QT</Text>
      </View>
    </View>
  )
}

export default Login
