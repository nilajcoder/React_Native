import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const index = () =>{

     const btnpress=()=>{
    
    alert("Thank You For Clicking the button")

   }
  return (

     
       <View style={styles.container}>
       <Text style={styles.title}>💻 Homework Day-6 💻</Text>

       <Image source={require('../assets/images/react-logo.png')}></Image>
       <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZIU9b9CdRoc6nDomWlvwYBlMh0IsYqz9cNJB4qNhudEUTBPl3e-13PFm23-C_gkN81s&usqp=CAU"}} style={styles.img}></Image>

         <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={btnpress}>
           <Image source={{uri:"https://www.shutterstock.com/image-vector/single-mouse-click-260nw-1045842496.jpg"}} style={styles.img1}></Image>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      <Text style={styles.textRedBig}>Welcome To Nilaj IT Company</Text>
      <Text style={styles.textGreenBig}>Welcome To Nilaj IT Company</Text>
      <Text style={styles.textPurpleBig}>Welcome To Nilaj IT Company</Text>
      <Text style={styles.textRedBold}>Welcome To Nilaj IT Company</Text>
      <Text style={styles.textGreenSmall}>Welcome To Nilaj IT Company</Text>
      <Text style={styles.textPurpleSmall}>Welcome To Nilaj IT Company</Text>
      <Text style={styles.textRedSmall}>Welcome To Nilaj IT Company</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({

   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textRedBig: {
    color: 'red',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textGreenBig: {
    color: 'lime',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textPurpleBig: {
    color: 'purple',
    fontSize: 28,
    marginVertical: 5,
  },
  textRedBold: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textGreenSmall: {
    color: 'lime',
    fontSize: 20,
    marginVertical: 5,
  },
  textPurpleSmall: {
    color: 'purple',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  textRedSmall: {
    color: 'red',
    fontSize: 20,
    marginVertical: 5,
  },

  img: {

    height:100,
    width:100,
    borderRadius:50,
      borderWidth: 3,       // thickness of border
  borderColor: 'black', // border color
  } ,
    title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
    borderRadius:5,
    borderColor:'black',
    borderWidth:5,
    
  },

  button :{
     backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems:"center", //centre
    justifyContent:"center",//centre buttton

    width:200,
    alignSelf:"center" 
  } ,

    buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center"
    
  },

  img1:{

    height:20,
    width: 20
  }



})