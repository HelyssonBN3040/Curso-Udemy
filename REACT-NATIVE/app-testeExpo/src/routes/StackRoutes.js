import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home} 
            />
            <Stack.Screen 
                name="About"
                component={About}
            />
            <Stack.Screen 
                name="Contact"
                component={Contact}
            />
        </Stack.Navigator>
    )
}