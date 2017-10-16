/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text , Image, View,StyleSheet } from 'react-native';

export default class MyApp extends Component {
    render() {
        return (

    );
    }
}


const styles = StyleSheet.create({
    rootView:{
        backgroundColor:'red',
        flex:1
    },
    innerView:{
        backgroundColor:'green',
        // 设置底部边框,一定要设置宽度才行
        borderBottomColor:'yellow',
        borderBottomWidth:2,
        // 设置外间距
        marginTop:50,
        marginLeft:100,
        // 设置内间距
        paddingTop:30,
        paddingLeft:50,
        // 设置宽度
        width:200,
        height:300
    },
    paddingView:{
        backgroundColor:'blue',
        width:50,
        height:50
    }
});


AppRegistry.registerComponent('MyApp', () => MyApp);
