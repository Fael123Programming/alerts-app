import React, { useState } from 'react';
import { 
  StyleSheet, 
  View,
  Alert 
} from 'react-native';
import { CustomButton } from './components/CustomButton';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.innerContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => {
              Alert.alert(
                'Alerta informativo',
                'Pressione OK para fechar',
              )
            }}
            buttonText={'Informativo'}
          />
        </View>
        <View style={styles.buttonContainer}>
            <CustomButton
              onPress={() => {
                Alert.alert(
                  '',
                  '',
                  [
                    {
                      text: 'SIM',
                      onPress: () => console.log('SIM foi escolhido')
                    },
                    {
                      text: 'NÃO',
                      onPress: () => console.log('NÃO foi escolhido')
                    }
                  ]
                );
              }}
              buttonText={'SIM ou NÃO'}
            />
        </View>
        <View style={styles.buttonContainer}>
            <CustomButton
              onPress={() => {
                Alert.alert(
                  '',
                  '',
                  [
                    {
                      text: 'Verde',
                      onPress: () => setBackgroundColor('green')
                    },
                    {
                      text: 'Vermelho',
                      onPress: () => setBackgroundColor('red')
                    },
                    {
                      text: 'Branco',
                      onPress: () => setBackgroundColor('white')
                    }
                  ]
                );
              }}
              buttonText={'Cor de fundo'}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: '#D7D7D7',
    height: 500,
    borderRadius: 50
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  }
});
