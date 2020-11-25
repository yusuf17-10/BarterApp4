import * as React from "react";
import {View,TextInput,StyleSheet, TouchableOpacity, Alert} from "react-native";
import firebase from "firebase";
//import db from "../config";

export default class SignUpLoginScreen extends React.Component{

    constructor(){
        super();
        this.state={
            emailId='',
            password=''
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
            <View style={{alignItems:'center'}}>

                <Text> style={{color:'aqua', fontSize:18, fontWeight:'bold',marginLeft:55,}}USERNAME</Text>

            <TextInput
            keyboardType='email-address'
            style={styles.input}
            onChangeText={()=>{
                this.setState({
                    emailId:text
                })
            }}
            />

            <View style={{alignItems:'center'}}>
            <TouchableOpacity 
             style={styles.button}
             onPress = {()=>{this.userLogin(this.state.emailId , this.state.password)}}
             >
            <Text> style={{color:'aqua', fontSize:18, fontWeight:'bold',marginLeft:55,}}LOGIN</Text>

            </TouchableOpacity>

            <TouchableOpacity 
             style={styles.button}
             onPress = {()=>{this.userSignUp(this.state.emailId , this.state.password)}}
             >
            <Text> style={{color:'aqua', fontSize:18, fontWeight:'bold',marginLeft:55,}}SIGN UP</Text>

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
      marginTop: 10,
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
      marginTop: 10,
      borderWidth:2,
      width:150,
      height:50,
    },
  });