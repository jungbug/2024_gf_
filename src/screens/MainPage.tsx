import React, { useState } from "react";
import { Image, View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { NAVIGATOR_MAIN_PAGE2 } from "../utils/screens";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<ParamListBase, "Landing Stack">;

const MainPage: React.FC<Props> = ({ navigation }) => {
    const [flag, setFlag] = useState(true);

    return (
        // 이미지 디스플레이 크기에 딱 맞게 조정
        <View style={styles.container}>

            <ImageBackground
                source={require('../assets/mainPage.jpeg')}
                style={styles.backgroundImage}>
                {flag ? (
                    <ImageBackground source={require('../assets/setting.png')} style={styles.backgroundImage} >
                        <TouchableOpacity onPress={() => setFlag(false)} style={styles.setting} />
                    </ImageBackground>
                ) : (
                    <ImageBackground source={require('../assets/setting_open.png')} style={styles.backgroundImage} >
                        <TouchableOpacity onPress={() => setFlag(true)} style={styles.setting} />
						<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_MAIN_PAGE2)} style={styles.changeRoom} />
                    </ImageBackground>
                )}
            </ImageBackground>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    backgroundImage1: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    changeRoom: {
        position: 'absolute',
        top: 260,
        right: 0,
        width: '12%',
        height: '7%',
        // backgroundColor: "white",
		zIndex: 2,
    },

    setting: {
        position: 'absolute',
        top: 70,
        right: 0,
        width: '20%',
        height: '10%',
        // backgroundColor: "white",
        zIndex1: 1,
    }
});

export default MainPage;