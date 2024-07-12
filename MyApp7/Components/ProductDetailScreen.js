import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import PDcomponent from './PDcomponent';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: 393,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
    <StatusBar backgroundColor="white" barStyle="light-content" translucent={false} />    
      <View>
        <View style={{ flex: 1 }}>
      <ScrollView style={{paddingTop: 5}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Image source={product.productImage} style={{
            width: 340,
            height: 380,
            marginBottom: 16,
            objectFit: 'fill'
          }}/>
        </View>
        <View style={{width: 340}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text style={{
            textAlign: 'left', fontWeight: '500', letterSpacing: 2, fontSize: 18, textAlign: 'left',
          }}>{product.productName}</Text>
          <Image source={require('../assets/Pics/Export.png')} style={{width: 30, height: 20, objectFit: 'contain'}}/>
          </View>
          <Text style={{
            fontSize: 16,
            textAlign: 'left',
            marginBottom: 8,
          }}>{product.description}</Text>
          <Text style={{
            fontSize: 20,
            color: '#F88379',
            marginBottom: 16,
            textAlign: 'left',
          }}>${product.productPrice}</Text>
        </View>
      </View>
      <PDcomponent />
    </ScrollView>
        </View>
        <View>
          <View
            style={{
              backgroundColor: "black",
              height: 65,
              bottom: 0,
              flexDirection: "row",
              justifyContent: 'space-between',
              alignItems: "center",
              width: 393,
            }}
          >
            <View style={{flexDirection: 'row', marginLeft: 15}}>
                <TouchableOpacity>
                    <FontAwesome name="plus" size={30} color="white" style={{width: 35, height: 35}}  />
                </TouchableOpacity>
                <Text
                    style={{
                    color: "white",
                    fontSize: 16,
                    marginLeft: 10,
                    marginRight: 25,
                    }}
                >
                    ADD TO BASKET
                </Text>
            </View>
            <TouchableOpacity>
                <FontAwesome name="heart-o" size={32} color="white" style={{marginRight: 15}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;