import React from 'react';
import {View, Text} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from "./HeaderStyles";

const Header = (props) => {
    const icon = <FontAwesome5 name={'bars'} solid color={"#000"} />;
    return (
        <View style={styles.container}>
            <View style={styles.headerImage}>{icon}</View>
            <Text></Text>
        </View>
    );
};

export default Header;