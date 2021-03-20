
import   React,{useEffect,useState } from 'react';
import { Text, View ,FlatList,ActivityIndicator, TouchableOpacity,StyleSheet,Dimensions,  Modal,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const axios = require('axios');


export default function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  const [newdata, setNewData] = useState([]);
  const [specialdata, specialNewData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {

    
    axios.get('http://androidsupport.ir/pack/aparat/getBestVideos.php')
    .then(function(response) {

      console.log(response.data)
      setData(response.data);
   

    })
    .catch(function(error){

      console.log(error)
    })
    .then(function () {
      // always executed
      setLoading(false)
    });



    axios.get('http://androidsupport.ir/pack/aparat/getNewVideos.php')
    .then(function(response) {

      console.log(response.data)
      setNewData(response.data);
   

    })
    .catch(function(error){

      console.log(error)
    })
    .then(function () {
      // always executed
      setLoading(false)
    });


    

    axios.get('http://androidsupport.ir/pack/aparat/getSpecial.php')
    .then(function(response) {

      console.log(response.data)
      specialNewData(response.data);
   

    })
    .catch(function(error){

      console.log(error)
    })
    .then(function () {
      // always executed
      setLoading(false)
    });




  },[]);



  
    return (

      <View style={styles.container}>
     

      {isLoading ? <ActivityIndicator/> : (


      <View >
        <Text style={styles.titles}>Best Videos</Text>


        <FlatList
        horizontal true
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (


            <TouchableOpacity style={styles.card} onPress={()=> {


              navigation.navigate('VideoPlayerScreen', {
                myParams : item,
                title : item.title,
              })

            }} >
            <Image style={styles.image} source={{uri: item.icon}}/>
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.position}>{item.time}</Text>
           
            </View>
          </TouchableOpacity>
          )}
        />


<Text style={styles.titles}>New Videos</Text>


<FlatList
horizontal true
  data={newdata}
  keyExtractor={({ id }, index) => id}
  renderItem={({ item }) => (


    <TouchableOpacity style={styles.card} onPress={()=> {


      navigation.navigate('VideoPlayerScreen', {
        myParams : item,
        title : item.title,
      })

    }} >
    <Image style={styles.image} source={{uri: item.icon}}/>
    <View style={styles.cardContent}>
      <Text style={styles.name}>{item.title}</Text>
      <Text style={styles.position}>{item.time}</Text>
   
    </View>
  </TouchableOpacity>
  )}
/>




<Text style={styles.titles}>Special Videos</Text>


<FlatList
horizontal true
  data={specialdata}
  keyExtractor={({ id }, index) => id}
  renderItem={({ item }) => (


    <TouchableOpacity style={styles.card} onPress={()=> {


      navigation.navigate('VideoPlayerScreen', {
        myParams : item,
        title : item.title,
      })

    }} >
    <Image style={styles.image} source={{uri: item.icon}}/>
    <View style={styles.cardContent}>
      <Text style={styles.name}>{item.title}</Text>
      <Text style={styles.position}>{item.time}</Text>
   
    </View>
  </TouchableOpacity>
  )}
/>






      </View>

      )}

         
    </View>

    );
  }

 
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#eeeeee"
  },
  titles:{
    margin:20,
  },
  header:{
    backgroundColor: "#00CED1",
    height:200
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  detailContent:{
    top:80,
    height:500,
    width:Dimensions.get('screen').width - 90,
    marginHorizontal:30,
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  userList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
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

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },

  
});