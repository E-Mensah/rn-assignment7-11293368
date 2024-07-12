import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import HomePage from './Components/HomePage';
import CheckOutPage from './Components/CheckOutPage';
import ProductDetailScreen from './Components/ProductDetailScreen';


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { navigation } = props;

  const handleCloseDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity onPress={handleCloseDrawer} style={{ alignItems: 'flex-start', marginLeft: 25, marginTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>✕</Text>
      </TouchableOpacity>
      <View style={{ backgroundColor: '#fff', marginBottom: 10, marginTop: 20}}>
        <Text style={{ fontSize: 20, fontWeight: '500', paddingHorizontal: 20, letterSpacing: 2 }}>ERIC ATSU</Text>
      </View>
      <View style={{ width: 95, borderBottomWidth: 2, borderBottomColor: '#CD5C5C', borderStyle: 'solid', marginLeft: 30, marginBottom: 25 }}></View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const CustomHeaderTitle = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
    <Image
      source={require('./assets/Images/Logo.png')}
      style={{ width: 120, height: 40 }}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="HomeScreen" 
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          gestureEnabled: true,
          headerTitle: () => <CustomHeaderTitle navigation={navigation} />,
          headerStyle: {
            height: 70, 
          },
          headerTitleAlign: 'center', 
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
              <Image
                source={require('./assets/Images/Menu.png')}
                style={{ width: 30, height: 35, objectFit: 'contain', alignSelf: 'center', marginLeft: 9 }} 
              />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen 
          name="HomeScreen" 
          component={HomePage} 
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 5 }}>
                <TouchableOpacity>
                  <Image
                    source={require('./assets/Images/Search.png')}
                    style={{ width: 30, height: 30, marginRight: 17 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                  <Image
                    source={require('./assets/Images/shoppingBag.png')}
                    style={{ width: 30, height: 30, marginRight: 20 }}
                  />
                </TouchableOpacity>
              </View>
            )
          })} 
        />
        <Drawer.Screen 
          name="CartScreen" 
          component={CheckOutPage}  
          options={{ headerShown: false }}
        />
        <Drawer.Screen 
          name='ProductDetailsScreen'
          component={ProductDetailScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 5 }}>
                <TouchableOpacity>
                  <Image
                    source={require('./assets/Images/Search.png')}
                    style={{ width: 30, height: 30, marginRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                  <Image
                    source={require('./assets/Images/shoppingBag.png')}
                    style={{ width: 30, height: 30, marginRight: 10 }}
                  />
                </TouchableOpacity>
              </View>
            )
          })} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

