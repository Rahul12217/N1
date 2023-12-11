import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './HomeStack';
import AboutStack from './profileStack';
import profileStack from './profileStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: profileStack,
  },
});

export default createAppContainer(RootDrawerNavigator);