import React, { useState } from "react";
import {Image, View, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";

import {NAVIGATOR_MAIN_PAGE} from "../utils/screens";
import {NAVIGATOR_BOOKS} from "../utils/screens";
import {NAVIGATOR_CHAT} from "../utils/screens";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<ParamListBase, "Landing Stack"	>;

const MainPage2: React.FC<Props> = ({navigation}) => {
	const [flag, setFlag] = useState(true);

	return (
		<View style={styles.container}>
			<ImageBackground
                source={require('../assets/mainPage2.jpeg')}
                style={styles.backgroundImage}>
                {flag ? (
                    <ImageBackground source={require('../assets/setting.png')} style={styles.backgroundImage} >
                        <TouchableOpacity onPress={() => setFlag(false)} style={styles.setting} />
                    </ImageBackground>
                ) : (
                    <ImageBackground source={require('../assets/setting_open.png')} style={styles.backgroundImage} >
                        <TouchableOpacity onPress={() => setFlag(true)} style={styles.setting} />
						<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_MAIN_PAGE)} style={styles.changeRoom} />
                    </ImageBackground>
                )}
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_MAIN_PAGE)} style={styles.changeRoom} />
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_BOOKS)} style={styles.books} />
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_CHAT)} style={styles.tabel} />
            </ImageBackground>

			{/* <ImageBackground
				source={require('../assets/mainPage2.jpeg')}
				style={styles.backgroundImage}>
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_MAIN_PAGE)} style={styles.changeRoom} />
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_BOOKS)} style={styles.books} />
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_CHAT)} style={styles.tabel} />
			</ImageBackground> */}
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

	books: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '30%',
		height: '60%',
		// backgroundColor: "white",
		marginTop: 140,
	},

	tabel: {
		position: 'absolute',
		top: 600,
		right: 0,
		width: '40%',
		height: '25%',
		// backgroundColor: "white",
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

export default MainPage2;
