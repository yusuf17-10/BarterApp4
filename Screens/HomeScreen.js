import * as React from "react";
import {Text,TouchableOpacity,View} from "react-native";
import { FlatList } from "react-native-gesture-handler";


export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            allRequests:""
        }
    }
    render(){
        return(
            <View>
                <Text style={{color:"orange",alignSelf:"center",fontSize:25,marginBottom:10}}>
                    Home Screen
                </Text>

            <FlatList 

                keyExtractor={this.keyExtractor}
                data={this.state.allRequests}
                renderItem={this.renderItem}
            />

            </View>
        )
    }

    renderItem = ({item,i}) =>{
        console.log(item.item_name);
        return(
            <ListItem
                key={i}
                title={item.item_name}
                subtitle={item.description}
                titleStyle={{color:"black",fontWeight:"bold"}}
                rightElement={
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:"#ffff"}}>Exchange</Text>

                    </TouchableOpacity>
                }

            />
        )
    }

}
