"use client";
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

const products = [
  { id: '1', name: 'Product 1', price: 10, stock: 5 },
  { id: '2', name: 'Product 2', price: 15, stock: 0 },
  { id: '3', name: 'Product 3', price: 20, stock: 10 },
];

export default function ProductListingScreen() {
  const { addToCart } = useCart();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 16 }}>
        Products
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 16,
              borderRadius: 10,
              backgroundColor: '#f0f0f0',
              marginBottom: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Stock: {item.stock > 0 ? item.stock : 'Out of Stock'}</Text>
            </View>

            <TouchableOpacity
              disabled={item.stock === 0}
              style={{
                backgroundColor: item.stock === 0 ? '#ccc' : '#007AFF',
                padding: 8,
                borderRadius: 6,
              }}
              onPress={() => addToCart({ id: item.id, name: item.name, price: item.price, quantity: 1 })}
            >
              <Text style={{ color: '#fff' }}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
