import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import NextArrowButton from "./nextArrowButton";
import Icon from 'react-native-vector-icons/FontAwesome'
import Hyperlink from 'react-native-hyperlink'


function Separator() {
    return <View style={styles.separator} />;
}

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: this.props.navigation.getParam('email') };
    }
    handlePressLeaveRequest = () => {
        const { email } = this.state;
        alert("handlePressLeaveRequest");
        this.props.navigation.navigate('LeaveRequest', { 'email': email });

    }
    handlePressPendingList = () => {
        const { email } = this.state;
        alert("PendingLeaves............11111" + email);
        this.props.navigation.navigate('PendingLeaves', { 'email': email });

    }
    handlePressApprovedList = () => {
        const { email } = this.state;
        alert("handlePressLeaveRequest............22222" + email);
        this.props.navigation.navigate('ApprovedLeaves', { 'email': email });

    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper}>
                <View style={styles.scrollViewWrapper} >
                    <Text style={styles.loginHeader}>Welcome {this.state.email}</Text>
                    <View>
                        <Button
                            color="white"
                            title="Leave Request"
                            onPress={this.handlePressLeaveRequest}
                        />
                    </View>
                    <Separator />
                    <View>
                        <Button
                            color="white"
                            title="Pending Leaves"
                            onPress={this.handlePressPendingList}
                        />
                    </View>
                    <Separator />
                    <View>
                        <Button
                            color="white"
                            title="Approved Leaves"
                            onPress={this.handlePressApprovedList}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        display: "flex",
        flex: 1,
        backgroundColor: '#0000FF',

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    ScrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
    },
    loginHeader: {
        fontSize: 18,
        color: 'white',
        marginBottom: 40
    },
    nextButton:
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