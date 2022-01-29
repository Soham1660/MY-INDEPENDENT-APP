import * as React from 'react'
import {Button, Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, Modal, KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'
import config from '../config'
import {SwitchNavigator, AppContainer} from 'react-native-tabs' 
import { ScrollView } from 'react-native-gesture-handler';
import HomeScreen from './HomeScreen'
export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            firstName:'',
            LastName:'',
            Contact:'',
            Address:'',
            confirmPassword:''

        }
    }
    showModal=()=>{
        return(
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isModalVisible}
            >

                <View>

                    <ScrollView style={{width:'100%'}}>
                        <KeyboardAvoidingView>


                            <Text>SIGN UP FORM</Text>
                            <TextInput style={styles.ButtonSheet}
                             placeholder="Enter your Email ID"
                             keyboardType="email-address"
                             onChangeText={(text)=>{
                                 this.setState({
                                     emailId:text
                                 })
                             }}
                            />
                            <TextInput style={styles.ButtonSheet}
                            placeholder="ENTER YOUR PASSWORD"
                            secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    password:text
                                })
                            }}
                            />
                            <TextInput style={styles.ButtonSheet}
                            placeholder="ENTER YOUR FIRST NAME"
                            onChangeText={(text)=>{
                                this.setState({
                                    firstName:text
                                })
                            }}
                            />
                            <TextInput style={styles.ButtonSheet}
                            placeholder="ENTER YOUR LAST NAME"
                            onChangeText={(text)=>{
                                this.setState({
                                    LastName:text
                                })
                            }}
                            />
                            <TextInput style={styles.ButtonSheet}
                            placeholder="ENTER YOUR CONTACT NO."
                            keyboardType="numeric"
                            onChangeText={(text)=>{
                               this.setState({
                                      contact:text
                                  })
                               }}
                              />
                              <TextInput style={styles.ButtonSheet}
                               placeholder="ENTER YOUR ADDRESS"
                               multiline={true}
                               onChangeText={(text)=>{
                                 this.setState({
                                   address:text
                                 })
                               }}
                              />
                              <TextInput style={styles.ButtonSheet}
                              placeholder="PLEASE CONFIRM YOUR PASSWORD"
                              secureTextEntry={true}
                              onChangeText={(text)=>{
                                this.setState({
                                  confirmPassword:text
                                })
                             }}
                             />
                  </KeyboardAvoidingView>
                </ScrollView>
              </View>
            </Modal>
        )
    }
    userSignUp=(emailId,password,confirmPassword)=>{
        if(password!==confirmPassword){
            alert("INCORRECT PASSWORD")
        }
        else
        {
            firebase.auth().createUserWithEmailAndPassword(emailId,password)
            .then(() => {
                debug.collection("users").add({
                    emailId:this.state.emailId
                })
                return Alert.alert('User Added Successfully',
                '',
                [
                    {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
                ]
                )
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("ERROR")
            });
        }
    }
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((user)=>{
            alert("SUCCESSFULLY LOGGED IN")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }
    render(){
        return(
          <View>
              <View>{this.showModal()}</View>
      <Text style={styles.TextStyle}>GROCERY</Text>
      <TextInput style={styles.ButtonSheet}
      placeholder="ENTER YOUR EMAIL ADDRESS"
      keyboardType='email-address'
      onChangeText={(text)=>{
        this.setState({
          emailId:text
        })
      }}
      />
      <TextInput style={styles.ButtonSheet}
      placeholder="ENTER YOUR PASSWORD"
      secureTextEntry={true}
      onChangeText={(text)=>{
        this.setState({
          password:text
        })
      }}
      />
              <Button title="LOGIN" color="blue" onPress={()=>{this.userLogin(this.state.password,this.state.emailId)}}/>
              <Button title="SIGN UP" colour="purple" onPress={()=>{this.userSignUp(this.state.emailId,this.state.password)}}/>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    ButtonSheet:{
        color:'red',
        border:'solid',
        borderColor:'pink',
        width:300,
        height:50
    }
})

var SwitchNavigator=createSwitchNavigator({
    HomeScreen : {screen:HomeScreen},
    WelcomeScreen : {screen:WelcomeScreen}
})

const AppContainer=createAppContainer(SwitchNavigator)