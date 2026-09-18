// components/CustomTabBar.tsx
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.filter(route => route.name !== 'index' && route.name !== 'media').map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        const icons = ['🏠', '📅', '📊', '👥', '📰', '⚙️'];

        return (
          <Pressable key={route.key} onPress={onPress} style={styles.tab}>
            <Text style={[styles.icon, isFocused && styles.active]}>
              {icons[index]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 3,
    borderColor: '#000',
    backgroundColor: '#fff',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    fontSize: 24,
    opacity: 0.5,
  },
  active: {
    opacity: 1,
  },
});