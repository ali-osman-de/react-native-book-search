
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import BookDetailScreen from "../screens/BookDetailScreen";



function HomeStack() {

    const Stack = createStackNavigator();


    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;  