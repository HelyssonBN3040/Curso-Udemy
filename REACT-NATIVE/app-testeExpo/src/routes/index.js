import React from "react";
import { FontAwesome, Feather } from '@expo/vector-icons'

import StackRoutes from "./StackRoutes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "../pages/About";
import Contact from "../pages/Contact";

import CustomDrawer from "../components/CustomDrawer";

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()


export default function Routes() {
    return (

        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                drawerActiveBackgroundColor: "#00dae4",
               
                drawerActiveTintColor: "white",
                drawerInactiveBackgroundColor: "#f1f1f1"


                // headerShown: true,
                // drawerStyle:{
                //     backgroundColor: '#121212'
                // },
                // drawerActiveTintColor:"white",
                // drawerActiveBackgroundColor: "blue",
                // drawerInactiveTintColor:"#000",
                // drawerInactiveBackgroundColor: "#ccc"
            }}
        >
            <Drawer.Screen
                name="HomeStack"
                component={StackRoutes}
            />
            <Drawer.Screen
                name="About"
                component={About}
            />
            <Drawer.Screen
                name="Contact"
                component={Contact}
            />
        </Drawer.Navigator>


        // <Tab.Navigator
        //     screenOptions={{
        //         headerShown: false,
        //         // tabbarhidekeyboard serve para esconder a tabbar ao utilizar o teclado
        //         tabBarHideOnKeyboard: true,
        //         tabBarShowLabel: true,
        //         tabBarActiveTintColor: 'red',

        //         tabBarStyle: {
        //             backgroundColor: "#202225",
        //             borderTopRightRadius: 10,
        //             borderTopLeftRadius: 10,
        //             borderTopWidth: 0,
        //             marginTop: -10,
        //             height: 70
        //         }
        //     }}
        // >
        //     <Tab.Screen
        //         name="HomeStack"
        //         component={StackRoutes}
        //         options={{
        //             // tabBarLabel: "inicio"
        //             tabBarIcon: ({ color, size }) => {
        //                 return <FontAwesome name="home" color={color} size={size} />
        //             }
        //         }}
        //     />
        //     <Tab.Screen
        //         name="AboutStack"
        //         component={StackRoutes}
        //         options={{
        //             tabBarIcon: (color, size) => {
        //                 return <FontAwesome name="file" color={color} size={size} />
        //             }
        //         }}
        //     />
        //     <Tab.Screen
        //         name="Contact"
        //         component={Contact}
        //         options={{
        //             tabBarIcon: (color, size) => {
        //                 return <FontAwesome name="rocket" color={color} size={size} />
        //             }
        //         }}

        //     />
        // </Tab.Navigator>
    )
}
