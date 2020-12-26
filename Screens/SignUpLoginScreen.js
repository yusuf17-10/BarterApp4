import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import firebase from "firebase";
import db from "../config";
import { Header } from 'react-native-elements';


export default class SignUpLoginScreen extends React.Component{

    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            isModalVisible: false,
            firstName: '',
            lastname: '',
            address: '',
            phone: '',
            confirmPassword: '',
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

    userSignUp = (username, password,confirmPassword) => {
        if(password!==confirmPassword){
          Alert.alert("Password Does Not Match")
        }else{
        firebase
          .auth()
          .createUserWithEmailAndPassword(username, password)
          .then(() => {
            return Alert.alert('User Added Successfully');
          })
          .catch((error) => {
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
          });
          db.collection('user').add({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            address: this.state.address,
            emailId:this.state.emailId
          });
        }
      };
    
      showModal = () => {
        return (
          <Modal
            style={{backgroundColor:"#FEFAEC"}}
            visible={this.state.isModalVisible}
            animationType="fade"
            transparent={false}>
            <View>
              <ScrollView>
                <KeyboardAvoidingView>
                  <Text style={{alignItems:"center",alignSelf:"center",backgroundColor:"pink",fontSize:30}}>Registration</Text>
                  <TextInput
                    style={styles.input}
                    placeholder={'firstName'}
                    maxLength={8}
                    onChangeText={(text) => {
                      this.setState({ firstName: text });
                    }}
                    value={this.state.firstName}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={'LastName'}
                    maxLength={8}
                    onChangeText={(text) => {
                      this.setState({ lastName: text });
                    }}
                    value={this.state.lastName}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={'address'}
                    multiline={true}
                    onChangeText={(text) => {
                      this.setState({ address: text });
                    }}
                    value={this.state.address}
    
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={'PhoneNumber'}
                    keyboardType={'numeric'}
                    maxLength={10}
                    onChangeText={(text) => {
                      this.setState({ phone: text });
                    }}
                    value={this.state.phone}
    
                  />
    
            <TextInput
              keyboardType={"email-address"}
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => {
                this.setState({ emailId: text });
              }}
              value={this.state.emailId}
            />
    
                 <TextInput
                    style={styles.input}
                    placeholder={'password'}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({ password: text });
                    }}
                    value={this.state.password}
    
                  />
    
                  <TextInput
                    style={styles.input}
                    placeholder={'ConfirmPassword'}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({ confirmPassword: text });
                    }}
                    value={this.state.confirmPassword}
    
                  />
    
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword);
                    }}>
                    <Text>Register</Text>
                  </TouchableOpacity>
    
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.setState({ isModalVisible: false });
                    }}>
                    <Text>cancel</Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </ScrollView>
            </View>
          </Modal>
        );
      };
    
    
  
     
    render(){
        return(
            <View style={{alignItems:'center',backgroundColor:"#FEFAEC"}}>
                     {
                     this.showModal()
                     }

            <Header
         backgroundColor={'#A9EEE6'}
        centerComponent={{
          text: 'Barter App',
          style: { color: '#625772', fontSize: 20 },
          }}
             />

          <Image 
            style={styles.imageIcon} 
            source={require('../assets/IMG.jpg')}
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
            <Text style={{color:'#E71989', fontSize:18, fontWeight:'bold',alignSelf:"center"}}>LOGIN</Text>

            </TouchableOpacity>

            <TouchableOpacity 
            style={{backgroundColor:"pink"}}
             style={styles.button}
             onPress = {()=>{this.setState({isModalVisible:true})}}
             >
            <Text style={{color:'#E71989', fontSize:18, fontWeight:'bold',alignSelf:"center",alignItems:"center",justifyContent:"center"}}>SIGN UP</Text>

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
      backgroundColor: 'white',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      marginTop: 30,
      borderWidth:2,
      width:200,
      height:50,
      paddingLeft:10
    },
    button: {
      backgroundColor: '#74DBEF',
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