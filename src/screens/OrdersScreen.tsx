"use client";
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const mockOrders = [
  { id: '1', shopName: "Joe's Cafe", status: 'Pending' },
  { id: '2', shopName: "Jane's Bookstore", status: 'Delivered' },
];

export default function OrdersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 16 }}>
        Your Orders
      </Text>

      <FlatList
        data={mockOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderTracking', { orderId: item.id })}
            style={{
              padding: 16,
              borderRadius: 10,
              backgroundColor: '#f0f0f0',
              marginBottom: 12,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.shopName}</Text>
            <Text>Status: {item.status}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
