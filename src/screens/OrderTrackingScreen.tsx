"use client";
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const statusSteps = ['Pending', 'Accepted', 'Out for Delivery', 'Delivered'];

export default function OrderTrackingScreen() {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatusIndex((prev) => (prev < statusSteps.length - 1 ? prev + 1 : prev));
    }, 5000); // simulate status update every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 20 }}>
        Order Tracking
      </Text>

      {statusSteps.map((status, index) => {
        const isActive = index === currentStatusIndex;
        const isCompleted = index < currentStatusIndex;
        return (
          <View key={status} style={styles.statusRow}>
            <View
              style={[
                styles.circle,
                isCompleted && styles.completedCircle,
                isActive && styles.activeCircle,
              ]}
            />
            <Text style={[styles.statusText, isActive && styles.activeText]}>
              {status}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 12,
  },
  completedCircle: {
    backgroundColor: '#007AFF',
  },
  activeCircle: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  statusText: {
    fontSize: 18,
    color: '#666',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
