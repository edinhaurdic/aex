import { useState } from "react";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function LoginScreen(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
            />
            </View>
 
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
        />
        </View>
        </View>
    
    )

}

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      }
})