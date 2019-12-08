import React ,{Component} from 'react';
import { StyleSheet, Text, View ,Button,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';
import {PropTypes} from 'prop-types';

export default class InputFiled extends Component
{
    render()
    {
        const {labelText,labelTextSize,labelColor,inputType,customStyle} = this.props;
        const fontSize = labelTextSize || 14;
        const color = labelColor || "#CD5C5C";
        return (
            <View style = {[{customStyle},styles.wraper]}>
             <Text style = {[{color,fontSize},styles.label]}> {labelText}</Text>
             <TextInput 
               autoCorrect ={false} 
               style = {styles.inputFiled}
               secureTextEntry = {inputType === 'password'}
             />
            </View>
        );
    }
}

InputFiled.propTypes = {
labelText : PropTypes.string.isRequired,
labelTextSize: PropTypes.number,
labelColor: PropTypes.String,
inputType : PropTypes.string.isRequired,
customStyle : PropTypes.object,
};

const styles = StyleSheet.create({
wraper : 
{
    display : 'flex',
},
label : {
    fontWeight : '700',
    marginBottom :10,
},
inputFiled :
{
 borderBottomWidth : 1,
 paddingTop : 5,
 paddingBottom : 5   
}
});