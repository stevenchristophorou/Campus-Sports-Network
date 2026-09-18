import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Account() {
  return (
    
    <SafeAreaView style={styles.safe}>
      <View >

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Campus Sports Network</Text>
        <Text style={styles.headerSubtitle}>CSN Account</Text>
      </View>

      {/* Profile */}
      <View style={styles.profileSection}>
        <View style={styles.profilePic}>
          <Text style={styles.profilePicText}>CS</Text>
        </View>
        <Text style={styles.profileName}>Your Name</Text>
      </View>

      {/* Settings */}
      <View style={styles.settings}>
        {['Email', 'Username', 'Language', 'Password', 'Tickets'].map((item) => (
          <TouchableOpacity key={item} style={styles.settingItem}>
            <Text style={styles.settingText}>{item}</Text>
            <Text>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  header: {
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFC72C',
    fontSize: 20,
    letterSpacing: 2,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 13,
  },

  profileSection: {
    alignItems: 'center',
    padding: 30,
  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFC72C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  profileName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },

  settings: {
    paddingHorizontal: 20,
  },
  settingItem: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 12,
    padding: 18,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingText: {
    fontSize: 18,
    fontWeight: '600',
  },

  bottomNav: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 2,
    borderColor: '#000',
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 22,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  activeText: {
    color: '#FFC72C',
  },
});