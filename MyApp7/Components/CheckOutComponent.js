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

  useEffect(() => {
    fetchCheckoutItems();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchCheckoutItems();
    }, [])
  );

  const removeFromCheckout = async (itemId) => {
    try {
      const updatedItems = checkoutItems.filter(item => item.id !== itemId);
      setCheckoutItems(updatedItems);
      await AsyncStorage.setItem('checkoutItems', JSON.stringify(updatedItems));
      const total = updatedItems.reduce((sum, item) => sum + item.productPrice, 0);
      setTotalSum(total);
      Alert.alert('Alert', 'Item removed from cart');
    } catch (error) {
      console.error('Error removing item from checkout', error);
    }
  };

  return (
    
      <ScrollView>
        <View style={{ paddingLeft: 20, gap: 20, marginBottom: 20}}>
          {checkoutItems.map(item => (
            <View key={item.id} style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: 380, gap: 15 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>  
                  <Image source={item.productImage} style={{ width: 90, height: 120 }} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>{item.productName}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', width: 240 }}>{item.description}</Text>
                    <Text style={{ color: '#F88379', fontSize: 15, fontWeight: '500' }}>${item.productPrice}</Text>
                  </View>
                  <View style={{ width: 25, height: 25, borderRadius: 14, alignItems: 'center', alignSelf: 'flex-end', }}>
                    <TouchableOpacity onPress={() => removeFromCheckout(item.id)}>
                      <Image source={require('../assets/Images/remove.png')} style={{ width: 20, height: 20, objectFit: 'contain' }} />
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