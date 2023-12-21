import { Colors } from '../constants';
import { borderStyles, borderRadiusStyles, generateSpacingStyles } from './../utils/helperMethods';
import {StyleSheet, ViewStyle} from 'react-native'



const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexStart: {
    justifyContent: 'flex-start'
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  flexCenter: {
    justifyContent: 'center'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  spaceAround: {
    justifyContent: 'space-around'
  },
  spaceEvenly: {
    justifyContent: 'space-evenly'
  },
  alignStart: {
    alignItems: 'flex-start'
  },
  alignEnd: {
    alignItems: 'flex-end'
  },
  alignCenter: {
    alignItems: 'center'
  },
  ...generateSpacingStyles(),
  ...borderStyles(),
  ...borderRadiusStyles(),
  w100: {
    width: '100%'
  },
  heading: {
    color: Colors.dark,
    fontSize: 16
  },
  title: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: '500'
  },
  description: {
    color: Colors.greyDark,
    fontSize: 12,
    fontWeight: '400'
  },
  icon: {
    width: 30,
    height: 30
  },
  iconL: {
    width: 50,
    height: 50
  }
})

export default mainStyles
