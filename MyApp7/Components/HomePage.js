import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native';
import { Items } from './DataStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({ navigation }) => {
  const pairs = [];
  for (let i = 0; i < Items.length; i += 2) {
    pairs.push(Items.slice(i, i + 2));
  }

  const addToCheckout = async (item) => {
    try {
      const storedItems = await AsyncStorage.getItem('checkoutItems');
      const checkoutItems = storedItems ? JSON.parse(storedItems) : [];
      checkoutItems.push(item);
      await AsyncStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
      console.log('Item added to checkout:', item);
      Alert.alert('Alert', 'Item successfully added to cart');
    } catch (error) {
      console.error('Error adding item to checkout', error);
    }
  };

  return (
    <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: 393, paddingLeft: 10, paddingRight: 10 }}>
      <StatusBar backgroundColor="white" barStyle="light-content" translucent={false} />
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 17 }}>
          <Text style={{ fontSize: 33, color: '#343434', fontFamily: 'serif' }}>OUR STORY</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <View style={{ width: 47, height: 47, backgroundColor: '#F5F5F5', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/Images/Listview.png')} style={{ width: 28, height: 28 }} />
            </View>
            <View style={{ width: 47, height: 47, backgroundColor: '#F5F5F5', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/Images/Filter.png')} style={{ width: 28, height: 28 }} />
            </View>
          </View>
        </View>
        <ScrollView>
          {pairs.map((pair, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              {pair.map(item => (
                <View key={item.id} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item.productImage} style={{ width: 172, height: 250 }} />
                    <TouchableOpacity onPress={() => addToCheckout(item)} style={{ width: 28, height: 28, position: 'absolute', right: 0, bottom: -6 }}>
                      <Image source={require('../assets/Images/add_circle.png')} style={{ width: 28, height: 28, position: 'absolute', right: 8, bottom: 22 }} />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}>
                      <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 3 }}>{item.productName}</Text>
                      <Text style={{ fontSize: 14, fontWeight: '400', marginBottom: 3 }}>{item.description}</Text>
                      <Text style={{ color: '#F88379', fontSize: 18, fontWeight: '500', fontFamily: 'monospace', letterSpacing: -2 }}>${item.productPrice}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomePage;

/*
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native';
import { Items } from './DataStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({ navigation }) => {
  const pairs = [];
  for (let i = 0; i < Items.length; i += 2) {
    pairs.push(Items.slice(i, i + 2));
  }

  const addToCheckout = async (item) => {
    try {
      const storedItems = await AsyncStorage.getItem('checkoutItems');
      const checkoutItems = storedItems ? JSON.parse(storedItems) : [];
      checkoutItems.push(item);
      await AsyncStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
      console.log('Item added to checkout:', item);
      Alert.alert('Alert', 'Item successfully added to cart');
    } catch (error) {
      console.error('Error adding item to checkout', error);
    }
  };

  return (
    <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: 393, paddingLeft: 10, paddingRight: 10 }}>
      <StatusBar backgroundColor="white" barStyle="light-content" translucent={false} />
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 17 }}>
          <Text style={{ fontSize: 33, color: '#343434', fontFamily: 'serif' }}>OUR STORY</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <View style={{ width: 47, height: 47, backgroundColor: '#F5F5F5', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/Images/Listview.png')} style={{ width: 28, height: 28 }} />
            </View>
            <View style={{ width: 47, height: 47, backgroundColor: '#F5F5F5', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/Images/Filter.png')} style={{ width: 28, height: 28 }} />
            </View>
          </View>
        </View>
        <ScrollView>
          {pairs.map((pair, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              {pair.map(item => (
                <View key={item.id} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item.productImage} style={{ width: 172, height: 250 }} />
                    <TouchableOpacity onPress={() => addToCheckout(item)} style={{ width: 28, height: 28, position: 'absolute', right: 0, bottom: -6 }}>
                      <Image source={require('../assets/Images/add_circle.png')} style={{ width: 28, height: 28, position: 'absolute', right: 8, bottom: 22 }} />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 3 }}>{item.productName}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', marginBottom: 3 }}>{item.description}</Text>
                    <Text style={{ color: '#F88379', fontSize: 18, fontWeight: '500', fontFamily: 'monospace', letterSpacing: -2 }}>${item.productPrice}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomePage;

*/