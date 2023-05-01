import React from 'react';
import { Image, View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/imc-login.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // TODO: Submit the form
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4285F4',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginPage;
