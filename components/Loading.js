import { ActivityIndicator, View } from 'react-native';
import Styles from './Styles'

export default Loading = () => {
  return (
      <View style={Styles.loading_Category}>
        <ActivityIndicator color={'black'} size="large" />
      </View>
  );
}