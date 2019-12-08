import React, { Component } from "react";
import { StyleSheet, Text, View ,Button,TextInput,KeyboardAvoidingView,ScrollView,TouchableOpacity,TouchableHighlight} from 'react-native';
import NextArrowButton from "./nextArrowButton";
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {email :''};
        this.state = {password: ''};
    }

    handlePress = async () => {
        const {email} = this.state;
        const {password} = this.state;
        alert(email + password);
        const response = await fetch('http://192.168.0.93:8080/students');
        const json= await response.json();
        if(json["result"] === 'true')
        {
            this.props.navigation.navigate('RestSample');
        }else
        {
            alert("Check details ....");    
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style = {styles.wrapper}>
                <View style = {styles.scrollViewWrapper} > 
                    <ScrollView style = {styles.scrollView}>
                        <Text style = {styles.loginHeader}>
                            Login
                        </Text>
                        <Text style ={{fontWeight: "700", marginBottom: 10 ,color :"#8FBC8F"}}>USERNAME </Text>
                        <TextInput 
                            style ={{borderBottomWidth: 1,
                                paddingTop: 5,
                                paddingBottom: 5 ,borderBottomColor :"#8FBC8F"}} 
                            onChangeText={(email) => this.setState({email})} value ={this.state.email}>
                        </TextInput>
                        <Text style ={{fontWeight: "700", marginBottom: 10,color :"#8FBC8F"}}>PASSWORD</Text>
                        <TextInput 
                            secureTextEntry={true}
                            style ={{borderBottomWidth: 1,
                                paddingTop: 5,
                                paddingBottom: 5,borderBottomColor :"#8FBC8F"}} 
                            onChangeText={(password) => this.setState({password})} value ={this.state.password}>
                        </TextInput>
                    </ScrollView>
        <View style={styles.buttonWrapper}>
                        <TouchableHighlight 
                            style = {[{ opacity: 0.6 }, styles.button]} 
                                        onPress = {this.handlePress}> 
                                    <Icon 
                                    name ="angle-right" 
                                    color ="#FFFF00" 
                                    size ={32} 
                                    style ={styles.icon}>
                                    </Icon>       
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
wrapper :
    {
        display: "flex",
        flex: 1,
        backgroundColor: '#0000FF',
},
scrollViewWrapper :{
    marginTop : 70,
    flex :1,
},
ScrollView :{
paddingLeft : 30,
paddingRight:30,
paddingTop: 20,
flex : 1
},
loginHeader:{
    fontSize : 28,
    color: '#8FBC8F',
    fontWeight : '300',
    marginBottom:40
},
nextButton :
{
    alignItems: "flex-end",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    paddingTop: 0,
    backgroundColor: "#8FBC8F"
},
buttonWrapper: {
    alignItems: "flex-end",
    right: 15,
    bottom: 15,
    paddingTop: 0
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    color: '#8FBC8F',
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});
