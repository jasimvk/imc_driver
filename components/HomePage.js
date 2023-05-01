import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home page!</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomePage;
