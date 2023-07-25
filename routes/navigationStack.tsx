import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/isLoggedIn/home';
import Settings from '../components/isLoggedIn/settings';
import LandingPage from '../components/landingPage';
import Splash from '../components/splashScreen';
import SignIn from '../components/isLoggedOut/signIn';
import Loader from '../components/loaders/loader';
import DeviceSetup from '../components/isLoggedOut/setup';
import { NavigationContainer } from '@react-navigation/native';
import { UseLogIn } from '../context/logInProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import New from '../components/isLoggedIn/add_new';

import FarmLibrary from '../components/isLoggedIn/library';






const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const IsLoggedOutStack = () => {

    return (


        <AuthStack.Navigator initialRouteName="splash">
            <AuthStack.Screen name="signin" component={SignIn} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <AuthStack.Screen name="setup" component={DeviceSetup} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <AuthStack.Screen name="splash" component={Splash} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <AuthStack.Screen name="landingPage" component={LandingPage} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <AuthStack.Screen name="loader" component={Loader} options={{ headerShown: false, presentation: 'transparentModal' }} />
        </AuthStack.Navigator>



    )

}




function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#2DA15F',
            tabBarLabelStyle: { textAlign: 'center',fontFamily:'Poppins-SemiBold'},
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="home" color={color} size={size} />
                ),
            }} />

            <Tab.Screen name="New" component={New} options={{
                headerShown: false,
                tabBarLabel: 'New',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="add-location-alt" color={color} size={size} />
                ),
            }} />

            <Tab.Screen name="Library" component={FarmLibrary} options={{
                headerShown: false,
                tabBarLabel: 'Library',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="list" color={color} size={size} />
                ),
            }} />


            <Tab.Screen name="settings" component={Settings} options={{
                headerShown: false,
                tabBarLabel: 'settings',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="settings" color={color} size={size} />
                ),
            }} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}
function MyStack() {
    const { isLoggedIn }: any = UseLogIn()
    return (<NavigationContainer>
        {isLoggedIn ? <MyTabs /> : <IsLoggedOutStack />}
    </NavigationContainer>)

}

export default MyStack;