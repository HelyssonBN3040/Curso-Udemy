import React, { version } from "react";
import { View, Text, Image } from "react-native";

import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";


export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <View
                    style={{
                        width: "100%",
                        height: 85,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 30,
                    }}
                >
                    <Image
                        style={{ width: 65, height: 65 }}
                        source={require('../../assets/perfil.png')}
                    />

                    <Text
                        style={{
                            color: "#000",
                            fontSize: 17,
                            marginTop: 5,
                            marginBottom: 30
                        }}
                    >
                        Bem-vindo!
                    </Text>
                </View>

                <DrawerItemList {...props} />
                <View style={{
                    height: 500,
                    justifyContent: "flex-end",
                    alignItems: "center"

                }}>
                    <Text
                        style={{
                            color: "black"
                        }}
                    >
                        Version {version}
                    </Text>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}