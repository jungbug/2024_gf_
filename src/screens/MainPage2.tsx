import React, {useEffect} from "react";
import {Image, View, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";

import {useNavigation} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


import {NAVIGATOR_MAIN_PAGE} from "../utils/screens";
import {NAVIGATOR_BOOKS} from "../utils/screens";
import {NAVIGATOR_CHAT} from "../utils/screens";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<ParamListBase, "Landing Stack"	>;

const MainPage2: React.FC<Props> = ({navigation}) => {

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/mainPage2.jpeg')}
				style={styles.backgroundImage}>
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_MAIN_PAGE)} style={styles.changeRoom} />
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_BOOKS)} style={styles.books} />
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_CHAT)} style={styles.tabel} />
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

	changeRoom: {
		position: 'absolute',
		top: 30,
		left: 30,
		width: '20%',
		height: '10%',
		// backgroundColor: "white",
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
	}
  });

export default MainPage2;
