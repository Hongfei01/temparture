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

export default function App() {
  const [inputVal, setInputVal] = useState(0);
  return (
    <ImageBackground style={styles.background} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.workspace}>
              <Text>Temperature</Text>

              <Input defaultValue={inputVal} onChangeText={setInputVal} />

              <Text>Convert</Text>
            </View>
          </KeyboardAvoidingView>
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
