import React, {useEffect} from "react";
import {Image, View, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import {NAVIGATOR_MAIN_PAGE2} from "../utils/screens";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<ParamListBase, "Landing Stack"	>;

const Books: React.FC<Props> = ({navigation}) => {

	return (
		// 이미지 디스플레이 크기에 딱 맞게 조정
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/books.jpeg')}
				style={styles.backgroundImage}>
				<TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_MAIN_PAGE2)} style={styles.changeRoom} />
				{/* <TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_MAIN_PAGE2)} style={styles.books} /> */}
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
		top: 20,
		left: 20,
		width: '20%',
		height: '10%',
		// backgroundColor: "white",
	},
  });

export default Books;
