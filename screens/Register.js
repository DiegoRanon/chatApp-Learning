import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Title from '../component/UI/Title';

function Register({navigation, route}) {

    // Functions 
    function handlerRegister() {
        // Register
    }

    function handlerLogin() {
        navigation.navigate("Login")
    }


  return (
      <View style={styles.root}>
        <Title>Register</Title>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#fff"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
          />

          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={handlerLogin}>
            <Text style={styles.ButtonText}>Return to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#fff',
    borderRadius: 5,
  },
  Button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  ButtonText: {
    color: '#4682B4',
    fontWeight: 'bold',
  },
});

export default Register;
