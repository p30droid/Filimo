
import * as React from 'react';
import { Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import { InterstitialAd, RewardedAd, BannerAd, TestIds,BannerAdSize } from '@react-native-firebase/admob';

export default function Settingcreen() {


  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settingcreen!</Text>


        <BannerAd
      unitId="ca-app-pub-3940256099942544/6300978111"
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />



<Button title="Register" onPress={()=> {


auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });



}}  />


<Button title="Login" onPress={()=> {


auth()
  .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });



}}  />














      </View>
    );
  }