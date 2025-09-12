"use client";
import React from 'react';

export default function HomeScreenMockup() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 20, backgroundColor: '#fff', color: '#333' }}>
      <div style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>University Name</div>
      <input
        type="text"
        placeholder="Search for products or shops"
        style={{
          width: '100%',
          padding: 10,
          fontSize: 16,
          borderRadius: 8,
          border: '1px solid #ccc',
          marginBottom: 20,
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 30 }}>
        {['Food', 'Clothes', 'Electronics', 'Daily Items', 'Home Items'].map((category) => (
          <div
            key={category}
            style={{
              backgroundColor: '#e1effe',
              padding: 15,
              borderRadius: 10,
              width: 100,
              textAlign: 'center',
              userSelect: 'none',
              cursor: 'pointer',
            }}
          >
            {category}
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: '#cce5ff',
          borderRadius: 10,
          height: 150,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 22,
          fontWeight: 'bold',
          color: '#007aff',
          marginBottom: 30,
        }}
      >
        Promotions Carousel
      </div>

      <div>
        <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>Popular Shops</div>
        <div style={{ display: 'flex', gap: 15, overflowX: 'auto' }}>
          {[
            { id: '1', name: "Joe's Cafe", rating: 4.5, deliveryTime: '20-30 mins' },
            { id: '2', name: "Jane's Bookstore", rating: 4.7, deliveryTime: '15-25 mins' },
            { id: '3', name: "Techie's Hub", rating: 4.2, deliveryTime: '30-40 mins' },
          ].map((shop) => (
            <div
              key={shop.id}
              style={{
                backgroundColor: '#f0f0f0',
                padding: 15,
                borderRadius: 10,
                minWidth: 180,
                flexShrink: 0,
              }}
            >
              <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 5 }}>{shop.name}</div>
              <div style={{ fontSize: 14, marginBottom: 3 }}>Rating: {shop.rating}</div>
              <div style={{ fontSize: 14 }}>Delivery: {shop.deliveryTime}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        style={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: '#007aff',
          borderRadius: '50%',
          width: 60,
          height: 60,
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgb(0 122 255 / 0.4)',
        }}
        onClick={() => alert('Cart clicked')}
      >
        Cart
      </button>
    </div>
  );
}
