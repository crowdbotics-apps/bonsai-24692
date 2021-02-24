import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial208939Navigator from '../features/Tutorial208939/navigator';
import NotificationList208911Navigator from '../features/NotificationList208911/navigator';
import Settings208910Navigator from '../features/Settings208910/navigator';
import Settings208902Navigator from '../features/Settings208902/navigator';
import UserProfile208900Navigator from '../features/UserProfile208900/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial208939: { screen: Tutorial208939Navigator },
NotificationList208911: { screen: NotificationList208911Navigator },
Settings208910: { screen: Settings208910Navigator },
Settings208902: { screen: Settings208902Navigator },
UserProfile208900: { screen: UserProfile208900Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
