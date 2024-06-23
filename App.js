import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import hotBackground from './assets/hot.png';
import Input from './components/Input/Input';
import DisplayTemperature from './components/DisplayTemperature/DisplayTemperature';

import {
  UNITS,
  convertTemperatureTo,
  getOppsiteUnit,
} from './units/temperature';

export default function App() {
  const [inputVal, setInputVal] = useState(0);
  const [currentUnit, setCurrentUnit] = useState('°C');
  const oppsiteUnit = getOppsiteUnit(currentUnit);

  function getConvertedTemperature() {
    if (isNaN(inputVal)) return '';
    else return convertTemperatureTo(inputVal, oppsiteUnit).toFixed(2);
  }
  console.log(inputVal);
  return (
    <ImageBackground style={styles.background} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
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

            <Text>Convert</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
