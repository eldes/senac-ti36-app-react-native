import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Loading: FunctionComponent = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Carregando...</Text>
		</View>
	);
};

export default Loading;