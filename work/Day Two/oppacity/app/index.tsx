import { StyleSheet, Text, View,Button,  TouchableOpacity  } from 'react-native'
import React from 'react'
import Ionicons  from '@expo/vector-icons/Ionicons'
const index = () => {

   const btnpress=()=>{
    
    alert("Thank You For Clicking the button")

   }

  return (
     <View  style={styles.container}>

       <Text style={styles.title}>💻 Homework Day-5 💻</Text>

        {/* Big Sky Square */}
      <View style={styles.Box}>

        <Text style={styles.txt}>
          Name : Nilaj Chakraborty{"\n"}
       Mobile : +91 XXXXXXXXXX{"\n"}
       Town : Ichapur{"\n"}
    State : West Bengal{"\n"}
    Pin:-743144 {"\n"}
    Country : India{"\n"}
      
      
        </Text>

          {/* Opacity Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={btnpress}>
          <Ionicons name='download-outline' size={20} color='white'></Ionicons>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>

        

         
      </View>

      
    </View>
  )
}

export default index

const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // gray background
    alignItems: 'center',
    paddingTop: 40,
    borderRadius:20,
    borderColor:'black',
    borderWidth:5,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
    borderRadius:5,
    borderColor:'black',
    borderWidth:5,
    
  },

   Box: {
    height: 350,
    width: 350,
    backgroundColor: 'skyblue',
    marginVertical: 10,
    borderRadius:5,
    borderColor:'black',
    borderWidth:5,
  },

   txt: {
    fontWeight: 'bold',       // makes text bold
    fontSize: 20,             // optional: increase size
    textAlign: 'center',      // aligns text inside Text component
     marginBottom: 20, // space between text and button
  },

    button: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems:"center", //centre
    justifyContent:"center",//centre buttton

    width:200,
    alignSelf:"center" 
   

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center"
    
  },
})