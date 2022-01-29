import * as React from 'react'
import {View, Button, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

export default class TransportRequestScreen extends React.Component{
    constructor(){
        super();
        this.state=({
          TypeOfTransport:'',
          ReasonWhy:''
        })
    }
    remder(){
        return(
            <View>
                <TextInput
                placeholder="ENTER THE TYPE OF TANSPORT YOU WANT(CARGO, TRUCK, TEMPO)"
                onChangeText={(text)=>{
                    this.setState({
                        TypeOfTransport:text
                    })
                }}
                />
                <TextInput
                placeholder="WHY DO U WANT THE TRANSPORT U HAVE CHOOSEN?"
                multiline={true}
                numberOfLines={8}
                onChangeText={(text)=>{
                    this.setState({
                        ReasonWhy:text
                    })
                }}
                />
            </View>
        )
    }
}