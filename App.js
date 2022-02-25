import {LogBox} from 'react-native';
import { UserProvider } from './src/Context/Context';
import NavigationHome from './src/Navigation/NavigationHome';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
      <UserProvider>
         <NavigationHome />
      </UserProvider>
 
  );
}
