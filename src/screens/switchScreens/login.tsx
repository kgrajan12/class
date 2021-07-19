import React from "react";
import { Text, View } from 'react-native';
import { loginScreenProp } from 'utils/props';
import { style } from "utils/style";
import { TEXT } from "../../../utils/constants";

export default class LoginScreen extends React.Component<loginScreenProp> {
    render() {
        return (
            <View style={style.container}>
                <Text>{TEXT.LOGIN}</Text>
            </View>
        );
    }
}