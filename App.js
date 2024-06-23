import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import hotBackground from './assets/hot.png';
import Input from './components/Input/Input';
import DisplayTemperature from './components/DisplayTemperature/DisplayTemperature';

export default function App() {
  const [inputVal, setInputVal] = useState(0);
  const [currentUnit, setCurrentUnit] = useState('°C');
  console.log(inputVal);
  return (
    <ImageBackground style={styles.background} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <View style={styles.workspace}>
            <DisplayTemperature temperature={inputVal} unit={currentUnit} />

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
