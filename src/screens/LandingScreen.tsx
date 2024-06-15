import React, { useEffect } from "react";
import { View, Image } from "react-native";

import { ParamListBase } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

// import { NAVIGATOR_BOTTOM_TAB } from "@utils/screens";

import {NAVIGATOR_MAIN_PAGE} from "../utils/screens";

type Props = StackScreenProps<ParamListBase, "Landing Stack"	>;

const LandingScreen: React.FC<Props> = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace(NAVIGATOR_MAIN_PAGE);
		}, 2000);
	}, [navigation]);

	return (
		<Image source={require("../assets/splash.png")} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }} />
	);
};

export default LandingScreen;
