import * as React from 'react'
import {TextInput, Text, TouchableOpacity, View, Button} from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={{border:"solid", borderRadius:50, width:200, height:200}}>
                     <Text>TEMPO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{border:"solid", borderRadius:50, width:200, height:200}}>
                     <Text>CARGO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{border:"solid", borderRadius:50, width:200, height:200}}>
                     <Text>TRUCK</Text>
                </TouchableOpacity>
            </View>
        )
    }
}