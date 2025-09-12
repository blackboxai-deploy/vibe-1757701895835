"use client";
import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: '1', name: 'Food' },
  { id: '2', name: 'Clothes' },
  { id: '3', name: 'Electronics' },
  { id: '4', name: 'Daily Items' },
  { id: '5', name: 'Home Items' },
];

const popularShops = [
  { id: '1', name: "Joe's Cafe", rating: 4.5, deliveryTime: '20-30 mins' },
  { id: '2', name: "Jane's Bookstore", rating: 4.7, deliveryTime: '15-25 mins' },
  { id: '3', name: "Techie's Hub", rating: 4.2, deliveryTime: '30-40 mins' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      {/* Top Bar */}
      <View style={{ height: 50, justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>University Name</Text>
      </View>
      {/* Search Bar */}
      <View style={{ marginTop: 8, marginBottom: 16 }}>
        <TextInput
          placeholder="Search for products or shops"
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            paddingHorizontal: 12,
            height: 40,
          }}
        />
      </View>

      <ScrollView>
        {/* Categories */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => navigation.navigate('ShopListing', { category: category.name })}
              style={{
                backgroundColor: '#E1EFFE',
                padding: 12,
                borderRadius: 10,
                width: 70,
                alignItems: 'center',
              }}
            >
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Banner Carousel Placeholder */}
        <View
          style={{
            height: 150,
            borderRadius: 10,
            backgroundColor: '#cce5ff',
            marginBottom: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Promotions Carousel</Text>
        </View>

        {/* Popular Shops */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
            Popular Shops
          </Text>

          <FlatList
            horizontal
            keyExtractor={(item) => item.id}
            data={popularShops}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ShopListing', { category: 'All' })}
                style={{
                  backgroundColor: '#f0f0f0',
                  borderRadius: 10,
                  padding: 12,
                  marginRight: 12,
                  width: 180,
                }}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 4 }}>
                  {item.name}
                </Text>
                <Text>Rating: {item.rating}</Text>
                <Text>Delivery: {item.deliveryTime}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>

      {/* Floating Cart Button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 80,
          right: 24,
          backgroundColor: '#007AFF',
          padding: 16,
          borderRadius: 30,
          elevation: 5,
        }}
        onPress={() => navigation.navigate('CartCheckout')}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
