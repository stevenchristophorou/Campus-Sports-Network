// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import CustomTabBar from '../../components/TabBar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="calendar" />
      
      <Tabs.Screen name="stats"/>
      
      

      <Tabs.Screen name="roster"/>

      <Tabs.Screen name="news"/>

      <Tabs.Screen name="accounts" />

      <Tabs.Screen name="media"/>

      
    </Tabs>
  );
}