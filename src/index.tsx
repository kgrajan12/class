import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { DashboardScreen, LoadingScreen, LoginScreen } from "./screens/switchScreens";

const AppContainer = createAppContainer(createSwitchNavigator({
    loading: LoadingScreen,
    login: LoginScreen,
    dashboard: DashboardScreen
}));

export default AppContainer;