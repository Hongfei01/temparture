import { TextInput, View, Text } from 'react-native';

import style from './style';
const Input = ({ defaultValue, onChangeText, unit }) => {
  return (
    <View style={style.rootContainer}>
      <TextInput
        keyboardType='number-pad'
        style={style.input}
        value={defaultValue}
        onChangeText={(text) => onChangeText(text)}
        maxLength={4}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Text style={style.unit}>{unit}</Text>
    </View>
  );
};

export default Input;
