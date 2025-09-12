"use client";
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const shops = [
  { id: '1', name: "Joe's Cafe", rating: 4.5, deliveryTime: '20-30 mins' },
  { id: '2', name: "Jane's Bookstore", rating: 4.7, deliveryTime: '15-25 mins' },
  { id: '3', name: "Techie's Hub", rating: 4.2, deliveryTime: '30-40 mins' },
];

export default function ShopListingScreen({ navigation, route }) {
  const { category } = route.params || {};

  // Here, shop fetching by category is currently mocked

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 16 }}>
        Shops - {category || 'All'}
      </Text>

      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 16,
              borderRadius: 10,
              backgroundColor: '#f0f0f0',
              marginBottom: 12,
            }}
            onPress={() =>
              navigation.navigate('ProductListing', { shopId: item.id, shopName: item.name })
            }
          >
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Delivery: {item.deliveryTime}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
