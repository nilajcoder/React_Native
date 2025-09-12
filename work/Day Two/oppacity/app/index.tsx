import { StyleSheet, Text, View,Button,  TouchableOpacity,TextInput  } from 'react-native'
import React from 'react'
import Ionicons  from '@expo/vector-icons/Ionicons'
const index = () => {

   const btnpress=()=>{
    
    alert("Thank You For Clicking the button")

   }

  return (
     <View  style={styles.container}>

       <Text style={styles.title}>💻 Homework Day-5 💻</Text>
  
         <View style={styles.row}>

        
        {/* Big Sky First  Square */}
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

          <Button title='Button' color='blue'></Button>

   
      </View>

               {/* Second Box */}
    <View style={styles.Box2}>

       {/* Title */}
  <Text style={styles.formTitle}>Create Account</Text>

  {/* Input Fields */}
  <TextInput 
    style={styles.input} 
    placeholder="Email" 
    keyboardType="email-address"
  />
  <TextInput 
    style={styles.input} 
    placeholder="Password" 
    secureTextEntry={true}
  />
  <TextInput 
    style={styles.input} 
    placeholder="Confirm Password" 
    secureTextEntry={true}
  />

  {/* Sign Up Button */}
  <TouchableOpacity style={styles.signUpButton} activeOpacity={0.7}>
    <Text style={styles.signUpText}>Sign Up</Text>
  </TouchableOpacity>
    
    </View>

              {/* Third Box */}
    <View style={styles.Box2}>
      <Text style={styles.txt}>This is another box</Text>
    </View>
              {/* Fourth Box */}
    <View style={styles.Box2}>
      <Text style={styles.txt}>This is another box</Text>
    </View>

    </View>

    


     </View>
    
  )
}

export default index

const styles = StyleSheet.create({


  row: {
  
  flexDirection:"row",
  gap:15

},

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
    alignSelf:"flex-start"
    
  },

   Box: {
    height: 350,
    width: 350,
    backgroundColor: 'skyblue',
    marginVertical: 10,
    borderRadius:5,
    borderColor:'black',
    borderWidth:5,
    alignSelf: 'flex-start'
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
    alignSelf:"center" ,
     marginBottom: 15,  
   

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center"
    
  },

  Box2: {
  height: 350,
  width: 350,
  backgroundColor: 'skyblue',
  marginVertical: 10,
  borderRadius: 5,
  borderColor: 'black',   // black 👈  border
  borderWidth: 5,
  marginLeft:15
},

formTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
  color: 'purple',
},

input: {
  height: 50,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 15,
  backgroundColor: 'white',
},

signUpButton: {
  backgroundColor: 'purple',
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
},

signUpText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
},
})