import React from "react";
import { ActivityIndicator, View } from 'react-native';
import { connect } from "react-redux";
import { secondary } from "utils/colors";
import { NavigationRoutes } from "utils/constants";
import { loadingScreenProp } from 'utils/props';
import { style } from "utils/style";
import { loadingStateToProps } from "../../store/mapStateToProps";

class LoadingScreen extends React.Component<loadingScreenProp> {
    componentDidMount() {
        this.checkLogin();
    }
    componentDidUpdate() {
        this.checkLogin();
    }
    checkLogin() {
        if(Object.keys(this.props.user).length > 0) {
            this.props.navigation.navigate(NavigationRoutes.DASHBOARD);
        } else {
            this.props.navigation.navigate(NavigationRoutes.LOGIN);
        }
    }
    render() {
        return (
            <View style={style.centerContainer}>
                <ActivityIndicator size='large' color={secondary} />
            </View>
        );
    }
}

export default connect(loadingStateToProps)(LoadingScreen);