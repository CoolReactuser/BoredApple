import { Text, SafeAreaView, StyleSheet, TouchableOpacity,View, ScrollView,Image} from 'react-native';

import {useState, useEffect} from 'react'


export default function Bitcoin(props) {
  const [data, setData] = useState([])
  const [ change, setChange] = useState(false)
  const [car, setCar]= useState([])
   const [float, setFloat]= useState([])
      const [money, setMoney]= useState([])

 
function cool(){
  setChange(!change)
}
function APICall(){

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((response)=>response.json())
.then((json)=>{
  setData(json.bpi.USD.rate)
    setCar(json.bpi.USD.rate_float)   
    setFloat(json.time.updateduk)
        setMoney(json.disclaimer)
  console.log(json.bpi.USD.rate)
  })
.catch((error)=>console.log(error))

}
useEffect(()=>{
APICall()
},[change])




  return (
 <View style={{flex:1,backgroundColor:"white"}}>
    <View style={{flex:1,}}>
    <Text style={{fontSize: 25,
    fontWeight: 'bold',
    marginTop:80,
    color: 'black',alignSelf:"center"}}>Bitcoin-> $</Text>
    </View>
    <View style={styles.container }>
  
   <Image style={styles.gif} source={{uri:"https://media.tenor.com/aDozr1-R2n0AAAAi/bitcoin.gif"}}/>
  <Text style={styles.content}>{data.content} <Text style={styles.textcontent}>BITCOIN to USD Current: ${data} | Rate Float: ${car} | LAST UPDATED: {float} | DISCLAIMER: {money}</Text></Text>
    </View>
    <View style={{flex:1,}}>
  <TouchableOpacity onPress={cool} style={styles.button}>
  <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>RELOAD</Text>
  </TouchableOpacity>
   <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Text style={{fontWeight:'bold', fontSize:20}}>Back</Text>
        </TouchableOpacity>
   </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    paddingTop: 10,
     margin:20,
     marginTop:20,
     overflow: 'hidden',
     height:450,
     width:"85%",
     padding:10,
     borderRadius:50,
     backgroundColor:"#ACF0EA",
     marginLeft:30
  },
 
 
  gif: {
    width: 200,
    height: 200,
    borderRadius: 150,
    alignSelf: 'center',
    marginBottom: 20, 
    marginTop:10
  },

  content: {
    marginRight: 20,
    fontSize: 15,
    marginBottom: 10, // Add some margin below the content
    marginLeft: 20,
    alignSelf: 'center',
  },
  textcontent: {
    fontSize: 15,
    color: '#3B3A3B',
    marginRight: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#6495ed',
    color: '#3A59FF',
    width: '75%',
    height: 30,
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    
    alignSelf:"center",
    fontSize: 15,
    marginTop: '10%',
    alignItems: 'center',
  },
});
