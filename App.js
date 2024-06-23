import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import hotBackground from './assets/hot.png';
import coldBackground from './assets/cold.png';
import Input from './components/Input/Input';
import DisplayTemperature from './components/DisplayTemperature/DisplayTemperature';

import {
  UNITS,
  convertTemperatureTo,
  getOppsiteUnit,
  isIcedTemperature,
} from './units/temperature';
import ButtonConvert from './components/ButtonConvert/ButtonConvert';

export default function App() {
  const [inputVal, setInputVal] = useState(0);
  const [currentUnit, setCurrentUnit] = useState('°C');
  const oppsiteUnit = getOppsiteUnit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState(coldBackground);

  useEffect(() => {
    if (isIcedTemperature(inputVal, currentUnit)) {
      setCurrentBackground(coldBackground);
    } else {
      setCurrentBackground(hotBackground);
    }
  }, [inputVal, currentUnit]);
  function getConvertedTemperature() {
    if (isNaN(inputVal)) return '';
    else return convertTemperatureTo(inputVal, oppsiteUnit).toFixed(2);
  }
  return (
    <ImageBackground style={styles.background} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <KeyboardAvoidingView
              style={{ flex: 1, justifyContent: 'center' }}
              behavior='position'
            >
              <View style={styles.workspace}>
                <DisplayTemperature
                  temperature={getConvertedTemperature()}
                  unit={oppsiteUnit}
                />

                <Input
                  defaultValue={inputVal.toString()}
                  onChangeText={setInputVal}
                  unit={currentUnit}
                />

                <ButtonConvert
                  unit={oppsiteUnit}
                  onPress={() => setCurrentUnit(oppsiteUnit)}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  workspace: {
    height: 450,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  background: {
    height: '100%',
  },
});
