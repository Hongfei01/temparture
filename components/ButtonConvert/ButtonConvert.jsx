import { TouchableOpacity, Text } from 'react-native';

import style from './style';
const ButtonConvert = ({ onPress, unit }) => {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.text}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
};

export default ButtonConvert;
