import { Text } from 'react-native';

import style from './style';
const DisplayTemperature = ({ temperature, unit }) => {
  return (
    <Text style={style.temperatureTxt}>
      {temperature} {unit}
    </Text>
  );
};

export default DisplayTemperature;
