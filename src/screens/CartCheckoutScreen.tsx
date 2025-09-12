"use client";
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartCheckoutScreen() {
  const { cartItems } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 16 }}>
        Cart & Checkout
      </Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              borderRadius: 8,
              backgroundColor: '#f0f0f0',
              marginBottom: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>${item.price} x {item.quantity}</Text>
          </View>
        )}
      />

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 12 }}>
        Total: ${totalPrice}
      </Text>

      <TextInput
        placeholder="Delivery address"
        value={deliveryAddress}
        onChangeText={setDeliveryAddress}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          paddingHorizontal: 12,
          height: 40,
          marginTop: 12,
        }}
      />

      <TouchableOpacity
        disabled={!cartItems.length || !deliveryAddress}
        style={{
          backgroundColor: !cartItems.length || !deliveryAddress ? '#ccc' : '#007AFF',
          padding: 12,
          borderRadius: 8,
          marginTop: 20,
          alignItems: 'center',
        }}
        onPress={() => {
          /* Checkout logic */
          alert('Checkout clicked');
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
