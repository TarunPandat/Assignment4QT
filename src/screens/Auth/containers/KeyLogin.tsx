import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import mainStyles from '../../../styles';
import {Colors, Images} from '../../../constants';
import styles from '../styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../../config/route.config';
import {get} from '../../../services/apiServices';
import {API} from '../../../config/config';

const KeyLogin = () => {
  const [mkey, setMkey] = React.useState('');
  const [data, setData] = React.useState<{
    result: any;
    isLoading: boolean;
    error: any;
  }>({
    result: null,
    isLoading: false,
    error: null,
  });

  const ref = React.useRef<any>()

  const {height} = useWindowDimensions();
  const {navigate}: any = useNavigation();

  const onChange = (mkey: string) => {
    setMkey(mkey);
  };

  const onSubmit = async () => {
    if(!mkey) {
      ref?.current?.focus && ref?.current?.focus()
    }
    else {
      setData({...data, isLoading: true});
    const {result, error} = await get(`${API.validateKey}?mKey=${mkey}`);
    setData({...data, result, error, isLoading: false});
    if (result) {
      navigate(Routes.Login.name, result);
    }
    }
  };

  return (
    <View style={[mainStyles.container, mainStyles.center]}>
      <View style={[mainStyles.container, mainStyles.center, mainStyles.w100]}>
        <View
          style={[
            mainStyles.spaceAround,
            mainStyles.alignCenter,
            mainStyles.w100,
            mainStyles.px6,
            {height: height * 0.5},
          ]}>
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <View
            style={[
              mainStyles.b1,
              mainStyles.brd3,
              mainStyles.w100,
              styles.formBox,
              mainStyles.p10,
              mainStyles.alignCenter,
            ]}>
            <Text style={mainStyles.heading}>Login with key for Client</Text>
            <View style={mainStyles.my10}>
              <Input
                ref={ref}
                placeholder="Enter key..."
                value={mkey}
                onChangeText={onChange}
                icon={Images.lock}
              />
            </View>
            <View style={[mainStyles.w100, mainStyles.mb10]}>
              <Button
                title="SUBMIT"
                onPress={onSubmit}
                isLoading={data?.isLoading}
              />
              <View style={mainStyles.center}>
                {data?.error && (
                  <Text style={[mainStyles.title, mainStyles.my2, {color: Colors.red}]}>
                    {data?.error?.message || 'Something went wrong'}
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
  );
};

export default KeyLogin;
