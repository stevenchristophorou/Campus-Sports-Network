import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (email === 'username' && password === 'password') {
      router.replace('/home'); 
    } else {
      alert('Invalid login');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Campus Sports Network</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>

          <Text style={styles.logo}>CSN</Text>

          <TextInput
            placeholder="EMAIL"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#555"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="PASSWORD"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#555"
          />

          <View style={styles.remember}>
            <Switch
              value={remember}
              onValueChange={setRemember}
              trackColor={{ false: '#ccc', true: '#f5b700' }}
              thumbColor="#fff"
            />
            <Text style={styles.rememberText}>REMEMBER ME</Text>
          </View>

          {/* LOGIN BUTTON */}
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOG IN</Text>
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

  header: {
    backgroundColor: '#000',
    paddingVertical: 22,
    alignItems: 'center',
  },

  headerTitle: {
    color: '#f5b700',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 2,
  },

  card: {
    padding: 24,
    alignItems: 'center',
  },

  logo: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#f5b700',
    marginBottom: 18,
  },

  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#000',
    padding: 12,
    marginVertical: 9,
    fontSize: 15,
  },

  remember: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 14,
  },

  rememberText: {
    fontSize: 13,
  },

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