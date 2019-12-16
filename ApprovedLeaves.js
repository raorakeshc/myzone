import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import NextArrowButton from "./nextArrowButton";
import Icon from 'react-native-vector-icons/FontAwesome'
import Hyperlink from 'react-native-hyperlink'
import { Table, Row, Rows } from 'react-native-table-component';


function Separator() {
    return <View style={styles.separator} />;
}

export default class ApprovedLeaves extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.navigation.getParam('email'),
            tableHead: ['Start Date', 'End Date', 'Status', 'Manager'],
            tableData: [
                ['1/2/19', '1/2/19', 'Approved', 'CHaks'],
                ['1/2/19', '1/2/19', 'Approved', 'CHaks'],
                ['1/2/19', '1/2/19', 'Approved', 'CHaks'],
                ['1/2/19', '1/2/19', 'Approved', 'CHaks'],
            ]
          }
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper}>
                <Text style={styles.loginHeader}>{this.state.email} - Approved Leaves</Text>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                        <Rows data={this.state.tableData} textStyle={styles.text} />
                    </Table>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    head:
    {
        height: 40,
    },
    text:
    {
        margin: 6
    },
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