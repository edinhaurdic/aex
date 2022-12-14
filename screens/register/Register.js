//registrera mig sidan
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';

export default class Register extends Component {

    constructor() {
        super()
        this.state = {
            UserName: '',
            UserEmail: '',
            UserPassword: ''
        }
    }

UserRegistrationFunction = () => {
    fetch ('http://192.168.0.14/User_Project/user_registration.php&#8217', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: this.state.UserName,
            email: this.setState.UserEmail,
            password: this.setState.UserPassword
        })
    }).then((response) => response.json())
        .then((responseJson) => {
            Alert.alert(responseJson);
        }).catch((error) => {
            console.log(error)
        });
    }

        render() {
            return (
        <View style={styles.MainContainer}>
                <Text style= {styles.title}>User Registration Form</Text>
          
                <TextInput
                  placeholder='Enter User Name'
                  onChangeText={name => this.setState({UserName : name})}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  />
                <TextInput
                  placeholder='Enter User Email'
                  onChangeText={email => this.setState({UserEmail : email})}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  />
                <TextInput
                  placeholder='Enter User Password'
                  onChangeText={password => this.setState({UserPassword : password})}
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                  secureTextEntry={true}
                  />
                <Button title='Click Here To Register' onPress={this.UserRegistrationFunction} color='#2196F3' />
              
          
        </View>
                    
            );

    }
}
const styles = StyleSheet.create({

    MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10
    },
    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,
    },
    title:{
        fontSize: 22,
        color: '#009688',
        textAlign: 'center',
        marginBottom: 15
    }
}
    );