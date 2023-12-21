import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Routes from '../config/route.config'
import { useSelector } from 'react-redux'
import { RootStateType } from '../redux/reducers'
import { getFilterRoutes } from '../utils/func'

const Stack = createNativeStackNavigator()


const Navigation = () => {

  const {token} = useSelector(({auth}: RootStateType) => auth)

  const Route: any = getFilterRoutes(Routes, token)

  return (
    <Stack.Navigator>
        {Route.map((route: any) => {
            return (
                <Stack.Screen key={route} name={route?.name} component={route.component} options={route.options} /> 
            )
        })}
    </Stack.Navigator>
  )
}

export default Navigation