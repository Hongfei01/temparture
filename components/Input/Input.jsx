import {
  TextInput,
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import style from './style';
const Input = ({ defaultValue, onChangeText }) => {
  return (
    <View style={style.rootContainer}>
      <TextInput
        style={style.input}
        defaultValue={defaultValue}
        onChangeText={(text) => onChangeText(text)}
        maxLength={3}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Text style={style.unit}>°C</Text>
    </View>
  );
};

export default Input;
