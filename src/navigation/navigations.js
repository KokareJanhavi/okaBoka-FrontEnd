
import AboutYouScreen from '../screens/AboutYou';
import ProfileNameScreen from '../screens/Profile';
import SignupScreen from '../screens/SignUp';
import SplashScreen from '../screens/SplashScreen';
import StudentDetailsScreen from '../screens/StudentDetailsScreen';
import VerificationScreen from '../screens/Verification';
import HomeScreen from '../screens/HomeScreen';
const navigations = [
  {name: 'SplashScreen', component: SplashScreen},
  {name:'SignUp', component:SignupScreen},
  {name:'Verification', component:VerificationScreen},
  {name:'Profile',component:ProfileNameScreen},
  {name:'AboutYou',component:AboutYouScreen},
  {name:'StudentDetailsScreen',component:StudentDetailsScreen},
  {name:'HomeScreen',component:HomeScreen},
];

export default navigations;