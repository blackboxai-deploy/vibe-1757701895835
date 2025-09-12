"use client";
import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useAuth } from '../context/AuthContext';

export default function GoogleAuthScreen() {
  const { setUser } = useAuth();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '<GOOGLE_OAUTH_CLIENT_ID>',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      // Here you should verify the token with your backend or Supabase
      setUser({ idToken: id_token });
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        disabled={!request}
        title="Sign in with Google"
        onPress={() => {
          promptAsync();
        }}
      />
      <Text style={{ marginTop: 16, color: 'gray' }}>
        Use Google login to continue
      </Text>
    </View>
  );
}
