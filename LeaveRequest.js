import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, KeyboardAvoidingView,TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Label } from 'native-base';


export default class LeaveRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selectdate: "15-05-2018" }
        this.state = { date1: "15-05-2018" }
    }

    handlePress = () => {
        const { fromDate } = this.state;
        const { toDate } = this.state;
        const { leaveType } = this.state;
        const { leaveCategry } = this.state;
        alert(fromDate + toDate + leaveType + leaveCategry);
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
                <Label> From Date </Label>
                <DatePicker name='fromDate'
                    style={{ width: 200 }}
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
                <Label> To Date </Label>
                <DatePicker name='toDate'
                    style={{ width: 200 }}
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
                    style={{ width: 150 }}
                    label='Leave Type'
                    data={leaveType}
                    onChangeText={(data) => { this.setState({ leaveType: data }) }}
                />

                <Dropdown
                    style={{ width: 150 }}
                    label='Leave Category'
                    data={leaveCategry}
                    onChangeText={(data) => { this.setState({ leaveCategry: data }) }}
                />
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Type something"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                />
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
        borderWidth: 1,
        padding: 5
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start"
      }
})