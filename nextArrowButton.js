import React ,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {StyleSheet,TouchableHighlight} from 'react-native';
import {PropTypes} from 'prop-types';


export default class NextArrowButton extends Component
{
    render() {
        const {disabled} = this.props;
        const opacityStyle = disabled ? {backgroundColor:'rgba(255,255,255,0.2)'} : {backgroundColor:'rgba(255,255,255,0.6)'};
        const {handleNextButton} = this.props;
        return (
            <TouchableHighlight 
            style = {[opacityStyle],styles.button} 
            onPress = {handleNextButton}> 
            <Icon 
               name ="angle-right" 
               color ="#FFFF00" 
               size ={32} 
               style ={styles.icon}>
            </Icon>       
         </TouchableHighlight>
        );
    }

}

const styles = StyleSheet.create({
 icon : {
     marginRight : -2,
     marginTop : -2,
 },
 button : {
    alignItems : 'center',
    justifyContent: 'center',
    borderRadius : 50,
    width:50,
    height:60,
 }
});