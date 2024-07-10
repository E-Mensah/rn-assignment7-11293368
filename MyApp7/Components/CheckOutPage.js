import React from 'react';
import { View, Text, Button } from 'react-native';

const CheckOutPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CPO Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

export default CheckOutPage;

