import * as React from "react";
import {View,TextInput,StyleSheet, TouchableOpacity, Alert,Text,Image} from "react-native";
import firebase from "firebase";
import db from "../config";
import { Header } from 'react-native-elements';


export default class SignUpLoginScreen extends React.Component{

    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }

    userLogin = (username, password)=>{
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(()=>{
            return Alert.alert("Successfully Login")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }

    userSignUp = (username, password) =>{
        firebase.auth().createUserWithEmailAndPassword(username,password)
        .then((response)=>{
            return Alert.alert("User Added Successfully")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }

    render(){
        return(
            <View style={{alignItems:'center',backgroundColor:"pink"}}>
            <Header
         backgroundColor={'orange'}
        centerComponent={{
          text: 'Barter App',
          style: { color: '#fff', fontSize: 20 },
          }}
             />
               

            <TextInput
            keyboardType='email-address'
            placeholder="Email"
            style={styles.input}
            onChangeText={(text)=>{
                this.setState({
                    emailId:text
                })
            }}
            />

           
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          value={this.state.password}
        />

            <View style={{alignItems:'center'}}>

            <TouchableOpacity 
             style={styles.button}
             onPress = {()=>{this.userLogin(this.state.emailId , this.state.password)}}
             >
            <Text style={{color:'aqua', fontSize:18, fontWeight:'bold',marginLeft:55,alignSelf:"center"}}>LOGIN</Text>

            </TouchableOpacity>

            <TouchableOpacity 
             style={styles.button}
             onPress = {()=>{this.userSignUp(this.state.emailId , this.state.password)}}
             >
            <Text style={{color:'aqua', fontSize:18, fontWeight:'bold',marginLeft:55,alignSelf:"center",alignItems:"center",justifyContent:"center"}}>SIGN UP</Text>

            </TouchableOpacity>
            </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    input: {
      backgroundColor: 'green',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      marginTop: 30,
      borderWidth:2,
      width:200,
      height:50,
    },
    button: {
      backgroundColor: 'green',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      marginTop: 30,
      borderWidth:2,
      width:150,
      height:50,
    },

    

  imageIcon: {
    width: 400,
    height: 200,
    justifyContent: 'center',
    alignItems:"center",
    alignSelf:"center",
    borderRadius: 10,
    marginTop:20
  },
  });