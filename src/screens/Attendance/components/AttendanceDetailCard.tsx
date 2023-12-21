import {View, Text, Image, ViewStyle} from 'react-native';
import React from 'react';
import {mergeStyles} from '../../../utils/helperMethods';
import mainStyles from '../../../styles';
import {Colors, Images} from '../../../constants';
import ArrowUp from '../../../assets/icons/arrow-up.svg'
import ArrowDown from '../../../assets/icons/arrow-down.svg'

interface Props {
    loginDetails: {
    logDate: string
    loginDate?: string
    loginEnabled: boolean
    loginLocation: string
    loginPhoto: string
    loginRemarks: string
    loginTime: string
    logoutEnabled: boolean
    logoutLocation: string
    logoutPhoto: string
    logoutRemarks: string
    logoutTime: string
    showLoginData: boolean
    showLogoutData: boolean
    workingTimeCompleted: string
    workingTimeRequired: string
    },
    open?: boolean,
    onToggle?: () => void,
    sn?: number
}

const AttendanceDetailCard = ({loginDetails, sn, open, onToggle}: Props) => {
  const wrapper = mergeStyles(mainStyles.brd3, mainStyles.b1, {
    backgroundColor: Colors.white,
    borderColor: Colors.greyLight,
  });
  const top = mergeStyles(
    mainStyles.row,
    mainStyles.brdt3,
    mainStyles.spaceBetween,
    mainStyles.alignCenter,
    mainStyles.p2,
    {
      backgroundColor: Colors.lighter,
      borderBottomWidth: 0.5,
      borderColor: Colors.greyLight,
    },
  );
  const timeCompCard = mergeStyles(
    mainStyles.center,
    mainStyles.brd2,
    mainStyles.py1,
    mainStyles.px2,
    {backgroundColor: Colors.white},
  );

  const container = mergeStyles(mainStyles.p10);

  const box = mergeStyles(
    mainStyles.p2,
    mainStyles.alignCenter,
    mainStyles.brd5,
    {borderWidth: 0.5, borderColor: Colors.greyLight, position: 'relative'},
  );

  const timeTag = mergeStyles(
    mainStyles.center,
    mainStyles.p2,
    mainStyles.brd2,
    {
      borderWidth: 0.5,
      borderColor: Colors.grey,
      backgroundColor: Colors.white,
      top: -15,
    },
  );

  const timeTag2 = mergeStyles(
    mainStyles.center,
    mainStyles.p2,
    mainStyles.brd2,
    {
      borderWidth: 0.5,
      borderColor: Colors.grey,
      backgroundColor: Colors.white,
      top: -15,
      position: 'absolute',
      alignSelf: 'center',
    },
  );

  const dashedLine: ViewStyle = {
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 1,
    height: '100%',
    borderColor: Colors.greyLight,
  };

  return (
    <View style={wrapper}>
      <View style={top}>
        <Text style={mainStyles.title}>{sn && <Text style={mainStyles.mr4} >{sn}.</Text>} {!sn && 'Date:'} {loginDetails?.logDate || loginDetails?.loginDate}</Text>
        <View style={mainStyles.row}>
        <View style={timeCompCard}>
          <Text style={mainStyles.title}>
            <Text style={{color: Colors.blue}}>Time Completed : </Text>
            {loginDetails?.workingTimeCompleted}
          </Text>
        </View>
            {onToggle ? open ? <ArrowUp onPress={onToggle} />: <ArrowDown onPress={onToggle} />  : null}
        </View>
      </View>
      {(onToggle && open) || !onToggle ? <View style={container}>
        {loginDetails?.logoutTime !== "--" ? (
          <View style={[box, mainStyles.row]}>
            <View style={[mainStyles.container, {position: 'relative'}]}>
              <View style={timeTag2}>
                <Text style={[mainStyles.title, {color: Colors.blueDark}]}>
                  Time In :
                  <Text style={[mainStyles.description, {color: Colors.blue}]}>
                    {' '}
                    {loginDetails?.loginTime}
                  </Text>
                </Text>
              </View>

              <View style={[mainStyles.center, mainStyles.mt5, mainStyles.pt5]}>
                <Image source={Images.profilePic} style={mainStyles.iconL} />
              </View>

              <View style={[mainStyles.center, mainStyles.mt5]}>
                <Text style={mainStyles.title}>Time In Location</Text>
                <Text
                  numberOfLines={1}
                  style={[mainStyles.description, {width: '90%'}]}>
                  {loginDetails?.loginLocation}
                </Text>
              </View>
              <View style={[mainStyles.center, mainStyles.my5]}>
                <Text style={mainStyles.title}>Remarks</Text>
                <Text
                  numberOfLines={1}
                  style={[mainStyles.description, {width: '90%'}]}>
                  {loginDetails?.loginRemarks}
                </Text>
              </View>
            </View>
            <View style={dashedLine}></View>
            <View style={[mainStyles.container, {position: 'relative'}]}>
              <View style={timeTag2}>
                <Text style={[mainStyles.title, {color: Colors.red}]}>
                  Time Out :
                  <Text style={[mainStyles.description, {color: Colors.red}]}>
                    {' '}
                    {loginDetails?.logoutTime}
                  </Text>
                </Text>
              </View>

              <View style={[mainStyles.center, mainStyles.mt5, mainStyles.pt5]}>
                <Image source={Images.profilePic} style={mainStyles.iconL} />
              </View>

              <View style={[mainStyles.center, mainStyles.mt5]}>
                <Text style={mainStyles.title}>Time Out Location</Text>
                <Text
                  numberOfLines={1}
                  style={[mainStyles.description, {width: '90%'}]}>
                  {loginDetails?.logoutLocation}
                </Text>
              </View>
              <View style={[mainStyles.center, mainStyles.my5]}>
                <Text style={mainStyles.title}>Remarks</Text>
                <Text
                  numberOfLines={1}
                  style={[mainStyles.description, {width: '90%'}]}>
                  {loginDetails?.logoutRemarks}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={box}>
            <View style={timeTag}>
              <Text style={[mainStyles.title, {color: Colors.blueDark}]}>
                Time In :
                <Text style={[mainStyles.description, {color: Colors.blue}]}>
                  {' '}
                  {loginDetails?.loginTime}
                </Text>
              </Text>
            </View>

            <View style={[mainStyles.center, mainStyles.mt1]}>
              <Image source={Images.profilePic} style={mainStyles.iconL} />
            </View>

            <View style={[mainStyles.center, mainStyles.mt5]}>
              <Text style={mainStyles.title}>Time In Location</Text>
              <Text style={mainStyles.description}>
                {loginDetails?.loginLocation}
              </Text>
            </View>
            <View style={[mainStyles.center, mainStyles.my5]}>
              <Text style={mainStyles.title}>Remarks</Text>
              <Text style={mainStyles.description}>
                {loginDetails?.loginRemarks}
              </Text>
            </View>
          </View>
        )}
      </View>: null}
    </View>
  );
};

export default AttendanceDetailCard;
