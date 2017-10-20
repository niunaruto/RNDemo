/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text , Image, View,StyleSheet,TextInput,ScrollView ,FlatList,TouchableOpacity} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'

export default class MyApp extends Component {

    constructor(props){
        super(props)
        this.stats = {name : 10 }
    }
    touchUpInsead = () => {
        alert('你点击了按钮' + this.stats.name)
    }

    render() {
        return (

            <View style={styles.mineViewStyle}>
                {/*<View style={styles.buttonStyles}>*/}
                    <TouchableOpacity  style={styles.buttonStyles} onPress={this.touchUpInsead}>
                        <Text style={styles.textStyle}>
                            确定
                        </Text>
                    </TouchableOpacity>
                {/*</View>*/}

            </View>



        );
    }
}

const styles = StyleSheet.create({
        mineViewStyle:{
            alignItems:'center',
            justifyContent: 'center',
            flex:1

        },
        buttonStyles:{
            backgroundColor:'red',
            height:30,
            width:60,

            alignItems:'center',
            justifyContent: 'center',
            borderRadius:5
        },
        textStyle:{
            fontSize:16,
            textAlign:'center',
            color:'white'

        }
    }
);

AppRegistry.registerComponent('MyApp', () => MyApp);
