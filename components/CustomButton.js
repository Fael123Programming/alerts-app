import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Percentages } from '../utils/Percentages';

const CustomButton = ({onPress, buttonText}) => {
    return (
        <Pressable
            onPress={onPress}
            style={style.buttonStyle}
        >
            <Text style={style.textStyle}>{buttonText}</Text>
        </Pressable>
    );
};

const style = StyleSheet.create({
    buttonStyle: {
        borderWidth: 1,
        borderColors: 'black',
        backgroundColor: 'blue',
        width: Dimensions.get('window').width * Percentages.customButtomWidth,
        height: Dimensions.get('window').height * Percentages.customButtonHeight,
        justifyContent: 'center',
        borderRadius: 10
    },
    textStyle: {
        fontSize: 21,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white'
    }
});

export { CustomButton };
