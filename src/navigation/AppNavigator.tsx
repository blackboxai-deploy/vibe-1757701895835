import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ShopListingScreen from '../screens/ShopListingScreen';
import ProductListingScreen from '../screens/ProductListingScreen';
import CartCheckoutScreen from '../screens/CartCheckoutScreen';
import OrderTrackingScreen from '../screens/OrderTrackingScreen';
import WalletProfileScreen from '../screens/WalletProfileScreen';
import OrdersScreen from '../screens/OrdersScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const OrdersStack = createNativeStackNavigator();
const WalletStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="ShopListing" component={ShopListingScreen} />
      <HomeStack.Screen name="ProductListing" component={ProductListingScreen} />
      <HomeStack.Screen name="CartCheckout" component={CartCheckoutScreen} />
      <HomeStack.Screen name="OrderTracking" component={OrderTrackingScreen} />
    </HomeStack.Navigator>
  );
}

function OrdersStackScreen() {
  return (
    <OrdersStack.Navigator screenOptions={{ headerShown: false }}>
      <OrdersStack.Screen name="OrdersMain" component={OrdersScreen} />
      <OrdersStack.Screen name="OrderTracking" component={OrderTrackingScreen} />
    </OrdersStack.Navigator>
  );
}

function WalletStackScreen() {
  return (
    <WalletStack.Navigator screenOptions={{ headerShown: false }}>
      <WalletStack.Screen name="WalletProfileMain" component={WalletProfileScreen} />
    </WalletStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Orders" component={OrdersStackScreen} />
        <Tab.Screen name="Wallet" component={WalletStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
