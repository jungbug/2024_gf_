import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import LandingScreen from "@screens/LandingScreen";
import {NAVIGATOR_BOTTOM_TAB, NAVIGATOR_LANDING, NAVIGATOR_MAIN_PAGE, NAVIGATOR_MAIN_PAGE2, NAVIGATOR_BOOKS, NAVIGATOR_CHAT} from "@utils/screens";

import BottomTabNavigation from "./BottomTabNavigation";
import MainPage from "../screens/MainPage";
import MainPage2 from "../screens/MainPage2";
import BOOKS from "../screens/books";
import Chat from "../screens/chat";

const Stack = createStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false,
};

const Navigation = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATOR_LANDING}
				component={LandingScreen}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_BOTTOM_TAB}
				component={BottomTabNavigation}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_MAIN_PAGE}
				component={MainPage}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_MAIN_PAGE2}
				component={MainPage2}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_BOOKS}
				component={BOOKS}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_CHAT}
				component={Chat}
				options={NAVIGATION_OPTIONS}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default Navigation;
