import { TextInput, View, Text, KeyboardAvoidingView } from 'react-native';

import style from './style';
const Input = ({ defaultValue, onChangeText, unit }) => {
  return (
    <KeyboardAvoidingView behavior='position' style={style.rootContainer}>
      <View style={style.rootContainer}>
        <TextInput
          keyboardType='number-pad'
          style={style.input}
          value={defaultValue}
          onChangeText={(text) => onChangeText(text)}
          maxLength={3}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Text style={style.unit}>{unit}</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Input;
