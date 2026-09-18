import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Switch
} from 'react-native';

export default function LoginScreen() {
  const [remember, setRemember] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Campus Sports Network</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>

          {/* Logo */}
          <Text style={styles.logo}>CSN</Text>

          {/* Inputs */}
          <TextInput
            placeholder="EMAIL"
            style={styles.input}
            placeholderTextColor="#555"
          />

          <TextInput
            placeholder="PASSWORD"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#555"
          />

          {/* Remember Me */}
          <View style={styles.remember}>
            <Switch
              value={remember}
              onValueChange={setRemember}
              trackColor={{ false: '#ccc', true: '#f5b700' }}
              thumbColor="#fff"
            />
            <Text style={styles.rememberText}>REMEMBER ME</Text>
          </View>

          {/* Buttons */}
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.secondary]}>
            <Text style={[styles.buttonText, styles.secondaryText]}>
              SIGN UP
            </Text>
          </Pressable>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: 340,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  /* Header */
  header: {
    backgroundColor: '#000',
    paddingVertical: 22,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#f5b700',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  /* Card */
  card: {
    padding: 24,
    alignItems: 'center',
  },

  /* Logo */
  logo: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#f5b700',
    marginBottom: 18,
  },

  /* Inputs */
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#000',
    padding: 12,
    marginVertical: 9,
    fontSize: 15,
  },

  /* Remember */
  remember: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 14,
  },
  rememberText: {
    fontSize: 13,
  },

  /* Buttons */
  button: {
    width: '100%',
    padding: 12,
    marginVertical: 7,
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  secondary: {
    backgroundColor: '#fff',
  },
  secondaryText: {
    color: '#000',
  },
});