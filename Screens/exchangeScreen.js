import * as React from "react";
import {Text,TouchableOpacity,View,TextInput,StyleSheet} from "react-native";
import firebase from "firebase";
import db from "../config";

export default class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userName:firebase.auth().currentUser.email,
            nameOfObject:"",
            description:""

        }
    }

    addItem=(nameOfObject,description)=>{
        db.collection("allRequests").add({
            userName:this.state.userName,
            nameOfObject:this.state.nameOfObject,
            description:this.state.description
        })
        this.setState({
            nameOfObject:"",
            description:""
        })
        this.props.navigation.navigate("HomeScreen")
    }

    render(){
        return(
            <View>
        
                <Text style={{color:"orange",alignSelf:"center",fontSize:25,marginBottom:10}}>
                    Exchange Screen
                </Text>

                <TextInput
                style={styles.input}
                placeholder="Item Name"
                onChangeText={(text)=>{
                    this.setState({nameOfObject:text})
                }}
                value={this.state.nameOfObject}
                />

                <TextInput style={[styles.input,{height:"50%"}]}
                placeholder="Description"
                onChangeText={(text)=>{
                    this.setState({description:text})
                }}
                multiline
                value={this.state.description}
                />

                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.addItem(this.state.nameOfObject,this.state.description)
                }}
                >
                    
                    <Text style={styles.buttonText}>Add Item</Text>

                </TouchableOpacity>            

            </View>
        )
    }
}

const styles=StyleSheet.create({
    button:{
        backgroundColor:"#549BAD",
        width:"40%",
        height:40,
        borderRadius:10,
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        marginTop:10,
        alignSelf:"center"
    },
    input:{
        backgroundColor:"#F0E1DE",
        width:"80%",
        height:40,
        borderRadius:5,
        borderWidth:1,
        textAlign:"center",
        padding:10,
        marginBottom:20,
        marginTop:10,
        justifyContent:"center",
        alignSelf:"center"

    },
    buttonText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#F0E1DE"
    }

})