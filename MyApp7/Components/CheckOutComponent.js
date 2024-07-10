import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const CheckOutComponent = ({ setTotalSum }) => {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const fetchCheckoutItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('checkoutItems');
      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);
        setCheckoutItems(parsedItems);
        const total = parsedItems.reduce((sum, item) => sum + item.productPrice, 0);
        setTotalSum(total);
      }
    } catch (error) {
      console.error('Error fetching checkout items', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchCheckoutItems();
    }, [])
  );

  const removeFromCheckout = async (itemToRemove) => {
    try {
      const updatedItems = checkoutItems.filter(item => item.id !== itemToRemove.id);
      setCheckoutItems(updatedItems);
      await AsyncStorage.setItem('checkoutItems', JSON.stringify(updatedItems));
      const total = updatedItems.reduce((sum, item) => sum + item.productPrice, 0);
      setTotalSum(total);
      console.log('Item removed from checkout:', itemToRemove);
      Alert.alert('Alert', 'Item successfully removed from cart');
    } catch (error) {
      console.error('Error removing item from checkout', error);
    }
  };

  return (
    <ScrollView>
      <View style={{ paddingRight: 20, gap: 30, marginBottom: 50 }}>
        {checkoutItems.map((item) => (
          <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: 380 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={item.productImage} style={{ height: 130, objectFit: 'contain' }} />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 17, fontWeight: '400', marginBottom: 6 }}>{item.productName}</Text>
                <Text style={{ fontSize: 16, fontWeight: '400', marginBottom: 4 }}>{item.description}</Text>
                <Text style={{ color: '#F88379', fontSize: 18, fontWeight: '500' }}>${item.productPrice}</Text>
              </View>
              <View style={{ width: 25, height: 25, borderRadius: 14, alignItems: 'center', alignSelf: 'flex-end', marginTop: 5 }}>
                <TouchableOpacity onPress={() => removeFromCheckout(item)}>
                  <Image source={require('../assets/Images/remove.png')} style={{ width: 23, height: 23, objectFit: 'contain' }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default CheckOutComponent;