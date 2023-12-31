import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView} from "react-native";

export default function Header(){
    return(
        <SafeAreaView>
        <View style={styles.header}>
            <TouchableOpacity>
               <Image
               source={require('../img/logo.png')}
               style={styles.logo}
               />
            </TouchableOpacity>

            <TouchableOpacity>
               <Image
               source={require('../img/send.png')}
               style={styles.send}
               />
            </TouchableOpacity>



        </View>
        </SafeAreaView>
    );
}

const styles =  StyleSheet.create({
 header:{
    height: 45,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2
    },
 send:{
    width: 23,
    height: 23,
    }
})