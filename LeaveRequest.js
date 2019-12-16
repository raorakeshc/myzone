import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, KeyboardAvoidingView, TextInput, Text, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Label } from 'native-base';


export default class LeaveRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selectdate: "15-05-2018" }
        this.state = { date1: "15-05-2018" }
        this.state = { reasonArea: "" }
        this.state = { managerName: "" }
        this.state = { userName: "" }
        this.state = { email: this.props.navigation.getParam('email') };
        loading = true;

    }

    componentWillMount() {
        this.setState({ loading: true });
        fetch(`http://192.168.0.93:8080/myzone/getEmpInfo`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.email,
            }),
        }).then(json => json.json())
            .then(employeeInfo => {
                this.setState({ loading: false, managerName: employeeInfo['managerName'], username: employeeInfo['userName'] });
            });
    }

    handlePress = () => {
        const { fromDate } = this.state;
        const { toDate } = this.state;
        const { leaveType } = this.state;
        const { leaveCategry } = this.state;
        const { managerName } = this.state;
        const { reasonArea } = this.state;
        alert(fromDate + toDate + leaveType + leaveCategry + reasonArea + managerName);
    }

    render() {
        let leaveType = [{
            value: 'Personal Leave',
        }, {
            value: 'Compensation Leave',
        }, {
            value: 'Adoc Leave',
        }];

        let leaveCategry = [{
            value: 'Full Day',
        }];
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.loginHeader}>{this.state.username} - Leave Request</Text>
                    <Text style={{ fontWeight: "700", marginBottom: 10, color: "white" }}> From Date </Text>
                    <DatePicker name='fromDate'
                        style={{
                            paddingTop: 5,
                            paddingBottom: 5, borderBottomColor: "white",
                            width: 250
                        }}
                        date={this.state.fromDate} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="31-12-2019"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ fromDate: date }) }}
                    />
                    <Text style={{ fontWeight: "700", marginBottom: 10, color: "white" }}> To Date </Text>
                    <DatePicker name='toDate'
                        style={{
                            paddingTop: 5,
                            paddingBottom: 5, borderBottomColor: "white",
                            width: 250
                        }}
                        date={this.state.toDate} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="01-01-2019"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ toDate: date }) }}
                    />
                    <Dropdown
                        label='Leave Type'
                        data={leaveType}
                        textColor="black"
                        baseColor="white"
                        onChangeText={(data) => { this.setState({ leaveType: data }) }}
                    />
                    <Dropdown
                        label='Leave Category'
                        data={leaveCategry}
                        textColor="black"
                        baseColor="white"
                        onChangeText={(data) => { this.setState({ leaveCategry: data }) }}
                    />
                    <Text style={{
                        fontWeight: "700",
                        marginBottom: 10,
                        color: "white", paddingTop: 10,
                        paddingBottom: 5,
                    }}> Manager :  {this.state.managerName}</Text>

                    <TextInput
                        name="reasonArea"
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="enter the reason here .."
                        placeholderTextColor="white"
                        numberOfLines={4}
                        multiline={true}
                        onChangeText={(data) => { this.setState({ reasonArea: data }) }}
                    />
                </ScrollView>
                <View style={styles.buttonWrapper}>
                    <TouchableHighlight
                        style={[{ opacity: 0.6 }, styles.button]}
                        onPress={this.handlePress}>
                        <Icon
                            name="angle-right"
                            color="#FFFF00"
                            size={32}
                            style={styles.icon}>
                        </Icon>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000FF',
    },
    textAreaContainer: {
        borderColor: 'yellow',
        borderWidth: 5,
        padding: 5
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
    },
    buttonWrapper: {
        alignItems: "flex-end",
        right: 15,
        bottom: 15,
        paddingTop: 0
    },
    textArea: {
        height: 100,
        justifyContent: "flex-start",
        borderColor: 'white',
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    }, loginHeader: {
        fontSize: 20,
        color: 'white',
        fontWeight: '300',
        marginBottom: 40
    },
    loginUser: {
        fontSize: 12,
        color: 'white',
        fontWeight: '100',
    },
})