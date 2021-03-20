
import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

export default function VideoPlayerScreen({route,navigation}) {

  const { myParams } = route.params;



    return (
      <View style={{ flex: 1 }}>
     


<Video

  source={{uri:myParams.link}}
  style={styles.backgroundVideo}
  resizeMode="cover"   
/>





      </View>
    );
  }


  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    card:{
      width : 300,
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginVertical: 10,
      marginHorizontal:20,
      backgroundColor:"white",
      flexBasis: '46%',
      padding: 10,
      flexDirection:'row'
    },
  });

