import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import AddNewPost from './screens/addNewPost';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='AddPost' component={AddNewPost} />
    </Stack.Navigator>
  );
}

export default HomeStack;