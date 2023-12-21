import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from 'react-native'
import React from 'react'
import mainStyles from '../../../styles'
import {mergeStyles} from '../../../utils/helperMethods'
import {Colors} from '../../../constants'
import List from '../../../assets/icons/list.svg'
import Cross from '../../../assets/icons/cross.svg'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import {months} from '../../../constants/months'
import moment from 'moment'
import {useNavigation} from '@react-navigation/native'
import Routes from '../../../config/route.config'

interface ModalProps {
  visible: boolean
  onClose: () => void
}

const AttendanceListModal = ({visible, onClose}: ModalProps) => {
  const {height, width} = useWindowDimensions()
  const {navigate}: any = useNavigation()
  const month = new Date().getMonth() + 1
  const montList = months.slice(0, month)

  const wrapper = mergeStyles(mainStyles.container, mainStyles.center, {
    backgroundColor: Colors.modalBg,
  })
  const container = mergeStyles(mainStyles.brd5, {
    backgroundColor: Colors.white,
    minHeight: height * 0.6,
    width: width * 0.95,
  })
  const top = mergeStyles(
    mainStyles.row,
    mainStyles.spaceBetween,
    mainStyles.brdt5,
    mainStyles.px7,
    mainStyles.py2,
    mainStyles.alignCenter,
    {
      height: 40,
      backgroundColor: Colors.greyLight,
    },
  )

  const ListHeader = () => (
    <View
      style={[
        mainStyles.row,
        mainStyles.py5,
        mainStyles.spaceBetween,
        {borderColor: Colors.greyLight},
      ]}>
      <View style={mainStyles.row}>
        <View style={{width: 70}}>
          <Text style={[mainStyles.title, {color: Colors.greyLight}]}>
            Sr. No.
          </Text>
        </View>
        <View>
          <Text style={[mainStyles.title, {color: Colors.greyLight}]}>
            Month, Year
          </Text>
        </View>
      </View>
    </View>
  )

  const ListItems = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={[
          mainStyles.row,
          mainStyles.py3,
          mainStyles.bb1,
          mainStyles.spaceBetween,
          {borderColor: Colors.greyLight},
        ]}
        onPress={() => navigate(Routes.AttendanceList.name, {month: ++index, year: new Date().getFullYear()})}>
        <View style={mainStyles.row}>
          <View style={{width: 70}}>
            <Text style={mainStyles.title}>{++index}</Text>
          </View>
          <View>
            <Text style={mainStyles.title}>
              {item}, {moment().format('YYYY')}
            </Text>
          </View>
        </View>
        <View>
          <ArrowRight />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <Modal visible={visible} transparent style={mainStyles.container}>
      <TouchableOpacity activeOpacity={1} onPress={onClose} style={wrapper}>
        <View style={container}>
          <View style={top}>
            <View style={mainStyles.row}>
              <List style={mainStyles.mr7} />
              <Text style={mainStyles.title}>Employee Attendance List</Text>
            </View>
            <View>
              <Cross />
            </View>
          </View>
          <View style={mainStyles.p7}>
            <FlatList
              data={montList}
              renderItem={ListItems}
              keyExtractor={item => item}
              ListHeaderComponent={ListHeader}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default AttendanceListModal
