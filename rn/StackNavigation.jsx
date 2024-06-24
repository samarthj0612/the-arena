import { createStackNavigator } from '@react-navigation/stack';
import AddNewPost from './screens/addNewPost';
import BottomNavigation from './BottomNavigation';
import Repost from './screens/repost';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomNavigation} />
      <Stack.Screen name='AddPost' component={AddNewPost} />
      <Stack.Screen name='Repost' component={Repost} />
    </Stack.Navigator>
  );
}

export default MainStack;