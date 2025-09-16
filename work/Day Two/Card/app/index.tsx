import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,Modal,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'


const index = () => {

    const [modalVisible, setModalVisible] = useState(false);
  return (

     <ScrollView>

     
   <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={{ uri: "https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/311335966_3263741650553715_8489889021170450557_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_d3LCes0kkAQ7kNvwHI09r6&_nc_oc=AdmtJhmj-cKfVYZf2bOTD-t1aRxrRrAJRHY_LpOkk9yHsRYlVe1hf1HJzidh_3jsJ58&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=rMnFwN2WmUPpHwFdJX_ySw&oh=00_AfZAzc7U8fY0U71OWLYES8LZkz6JVQly_XyeU-3XXW7dEA&oe=68CF1B41" }} // replace with your image link or require('./assets/profile.jpg')
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.name}>Nilaj Chakraborty</Text>

      {/* Role */}
      <Text style={styles.role}>&lt;Fullstack Dev/&gt;</Text>

      {/* Social Icons Row */}
      <View style={styles.socialRow}>
       <TouchableOpacity style={styles.iconCircle}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/174/174857.png" }} // LinkedIn icon
            style={styles.iconImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconCircle}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png" }} // GitHub icon
            style={styles.iconImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconCircle}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/174/174855.png" }} // Instagram icon
            style={styles.iconImage}
          />
        </TouchableOpacity>

      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Resume</Text>
        </TouchableOpacity>

           <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Hire Me!</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            
            <Text style={styles.modalTitle}>Contact Me</Text>
            <ActivityIndicator size={20} color={'red'}></ActivityIndicator>
            <Text style={styles.modalText}>📧 nilaj.chakraborty007@gmail.com</Text>
            <Text style={styles.modalText}>📞 +91 xxxxxxxx</Text>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "red", marginTop: 20 }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
    </View>
    </ScrollView>
  );
}

export default index

const styles = StyleSheet.create({


    container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  socialRow: {
    flexDirection: "row",
    marginBottom: 25,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  icon: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },

   iconImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

   modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 5,
  },
})