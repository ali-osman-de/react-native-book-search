import BookDetailScreen from "../screens/BookDetailScreen";
import SearchScreen from "../screens/SearchScreen";

import { createStackNavigator } from '@react-navigation/stack';



function SearchStack() {

    const Stack = createStackNavigator();


    return (
        <Stack.Navigator initialRouteName="SearchScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        </Stack.Navigator>
    );
}

export default SearchStack;  