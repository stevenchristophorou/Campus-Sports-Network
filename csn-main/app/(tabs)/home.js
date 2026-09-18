import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.app}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>CSN</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>

          <View style={styles.newsBox}>
            <Pressable style={styles.quickLink} onPress={() => router.push('/news')}>
              <Text style={styles.newsText}>Recent News</Text>
            </Pressable>
          </View>

          <Text style={styles.quickLinksTitle}>Quick Links</Text>

          <View style={styles.quickLinks}>
            <Pressable style={styles.quickLink} onPress={() => router.push('/calendar')}>
              <Text style={styles.quickLinkText}>Upcoming Games</Text>
            </Pressable>

            <Pressable style={styles.quickLink} onPress={() => router.push('/stats')}>
              <Text style={styles.quickLinkText}>Stats</Text>
            </Pressable>

            <Pressable style={styles.quickLink} onPress={() => router.push('/media')}>
              <Text style={styles.quickLinkText}>Highlights</Text>
            </Pressable>
          </View>

        </View>

        

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  app: {
    flex: 1,
    justifyContent: 'flex-start',
    maxWidth: 390,
    alignSelf: 'center',
    width: '100%',
  },

  /* Header */
  header: {
    padding: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#f5b700',
    display: 'block'
  },

  /* Content */
  content: {
    padding: 18,
    alignItems: 'center',
  },

  newsBox: {
  borderWidth: 4,
  borderColor: '#000',
  marginBottom: 44,
  width: '100%',
  alignItems: 'stretch', 
  },

  newsText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1,
  },

  quickLinksTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },

  quickLinks: {
    width: '100%',
    gap: 18,
  },

  quickLink: {
  padding: 16,
  borderWidth: 3,
  borderColor: '#000',
  backgroundColor: '#f5b700',
  shadowColor: '#000',
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 4,

  width: '100%',   // 🔥 IMPORTANT
  alignItems: 'center',
  justifyContent: 'center'
  },

  quickLinkText: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
  },

  /* Bottom Nav */
  bottomNav: {
    borderTopWidth: 3,
    borderColor: '#000',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  navIcon: {
    fontSize: 24,
  },
});