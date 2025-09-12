"use client";
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const transactionHistory = [
  { id: '1', amount: 25, date: '2024-05-01', description: 'Top-up' },
  { id: '2', amount: -15, date: '2024-05-02', description: 'Order Payment' },
  { id: '3', amount: 10, date: '2024-05-03', description: 'Cashback' },
];

export default function WalletProfileScreen() {
  const walletBalance = 120;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 20 }}>
        Wallet & Profile
      </Text>

      <Text style={{ fontSize: 20, marginBottom: 12 }}>
        Balance: ${walletBalance}
      </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
        Transactions
      </Text>

      <FlatList
        data={transactionHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              borderRadius: 8,
              backgroundColor: '#f0f0f0',
              marginBottom: 12,
            }}
          >
            <Text>{item.date} - {item.description}: ${item.amount}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 12,
          backgroundColor: '#007AFF',
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={() => {
          /* Navigate to edit profile screen or show edit modal */
          alert('Edit Profile Clicked');
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
