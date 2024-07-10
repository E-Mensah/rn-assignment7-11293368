import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PDcomponent from "./PDcomponent";
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const ProductDetailScreen = () => {
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
          <PDcomponent />
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