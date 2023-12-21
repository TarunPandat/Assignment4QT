import {View, Text, TextInput, Image, TextInputProps} from 'react-native'
import React from 'react'
import {mergeStyles} from '../utils/helperMethods'
import mainStyles from '../styles'
import {Colors, Images} from '../constants'

interface InputProps extends TextInputProps {
    icon?: any
    ref?: any
}

const Input = React.forwardRef(({ icon, ...props}: InputProps, ref: any) => {
  const wrapper = mergeStyles(
    mainStyles.row,
    mainStyles.b1,
    mainStyles.brd3,
    mainStyles.p2,
    mainStyles.mx5,
    mainStyles.alignCenter,
    {
      borderColor: Colors.grey,
    },
  )

  return (
    <View style={wrapper}>
        {icon && <Image source={icon} style={mainStyles.icon} />}
        <TextInput ref={ref} style={[mainStyles.pl2, mainStyles.w100]} {...props} />
    </View>
  )
})

export default Input
