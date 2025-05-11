
import BookDetailScreen from "../screens/BookDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createStackNavigator } from '@react-navigation/stack';



function FavoritesStack() {

    const Stack = createStackNavigator();


    return (
        <Stack.Navigator initialRouteName="FavoritesScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
            <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        </Stack.Navigator>
    );
}

export default FavoritesStack;  