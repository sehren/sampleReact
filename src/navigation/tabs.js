import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../page/home';
import Search from '../page/search';
import Profile from '../page/profile';

const Tab = createBottomTabNavigator();

function Tabs() {
  const homeIcon = ({color})=><Antdesign name="home" size={30} color={color}/>
  const searchIcon = ({color})=><Feather name="search" size={30} color={color}/>
  const profileIcon = ({color})=><Feather name="user" size={30} color={color}/>
  return (
    <Tab.Navigator tabBarOptions={{showLabel : false, activeTintColor : '#000', inactiveTintColor : '#aaa'}}>
      <Tab.Screen options={{tabBarIcon : homeIcon}} name="Home" component={Home} />
      <Tab.Screen options={{tabBarIcon : searchIcon}} name="Search" component={Search} />
      <Tab.Screen options={{tabBarIcon : profileIcon}} name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
export default Tabs;


// import React from 'react';
// import TabBar from "@mindinventory/react-native-tab-bar-interaction";
// import Home from '../page/home';

// class Tabs extends React.Component {
//     static navigationOptions = {
//       headerShown : false
//     };
//     render() {
//       return (
//           <TabBar bgNavBar="white" bgNavBarSelector="white" stroke="skyblue">
//             <TabBar.Item
//                 icon={require('../assets/icon/icon1.png')}
//                 selectedIcon={require('../assets/icon/icon1.png')}
//                 title="Tab1"
//                 screenBackgroundColor={{ backgroundColor: '#f3f3f3' }}
//             >
//                 <Home/>
//             </TabBar.Item>
//             <TabBar.Item
//                 icon={require('../assets/icon/icon1.png')}
//                 selectedIcon={require('../assets/icon/icon1.png')}
//                 title="Tab2"
//                 screenBackgroundColor={{ backgroundColor: '#f3f3f3' }}
//             >
//                 <Home/>
//             </TabBar.Item>
//             <TabBar.Item
//                 icon={require('../assets/icon/icon1.png')}
//                 selectedIcon={require('../assets/icon/icon1.png')}
//                 title="Tab3"
//                 screenBackgroundColor={{ backgroundColor: '#f3f3f3' }}
//             >
//             <Home/>
//             </TabBar.Item>
//           </TabBar>
//       );
//     }
//   }
// export default Tabs;