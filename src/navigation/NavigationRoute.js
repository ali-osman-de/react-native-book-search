import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FavoritesStack from './FavoritesStack';

const Tab = createBottomTabNavigator();

function NavigationRoute() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    }
                    if (route.name === 'Bookmarks') {
                        iconName = focused
                            ? 'bookmarks'
                            : 'bookmarks-outline';
                    }
                    if (route.name === 'Search') {
                        iconName = focused
                            ? 'search'
                            : 'search-outline';
                    }
                    return <Ionicons name={iconName} size={24} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 80,

                },
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Bookmarks" component={FavoritesStack} />
        </Tab.Navigator>
    );
}

export default NavigationRoute;