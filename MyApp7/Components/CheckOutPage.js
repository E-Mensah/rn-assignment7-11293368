import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import CheckOutComponent from './CheckOutComponent';

const CheckOutPage = ({ navigation }) => {
  const [totalSum, setTotalSum] = useState(0);

  return (
    <View style={{
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: 393,
      paddingLeft: 10,
      paddingRight: 10,
    }}>
      <View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 80, marginBottom: 28 }}>
            <View style={{ backgroundColor: 'white', height: 50, width: 150, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Image source={require('../assets/Images/Logo.png')} style={{ width: 110, height: 45, objectFit: 'contain' }} />
              </TouchableOpacity>
            </View>
            <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center', paddingRight: 45 }}>
              <Image source={require('../assets/Images/Search.png')} style={{ width: 25, height: 25, objectFit: 'contain' }} />
            </View>
          </View>
          <View>
            <Image source={require('../assets/Images/checkOl.png')} style={{ height: 70, width: 220, objectFit: 'contain', alignSelf: 'center', marginBottom: 20 }} />
          </View>
          <CheckOutComponent setTotalSum={setTotalSum} />
        </View>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
            <Text style={{ color: 'black', fontSize: 17, marginLeft: 20 }}>EST. TOTAL</Text>
            <Text style={{ color: '#F88379', fontSize: 18, marginRight: 25 }}>${totalSum}</Text>
          </View>
          <View style={{
            backgroundColor: 'black',
            height: 65, bottom: 0, flexDirection: 'row', justifyContent: 'center',
            alignItems: 'center', width: 393
          }}>
            <Image source={require('../assets/Images/chartW.png')} />
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 10, marginRight: 25 }}>CHECKOUT</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CheckOutPage;
