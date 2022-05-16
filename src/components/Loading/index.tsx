import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type Props = {
	show?: boolean
};

const Loading: React.FC<Props> = (props) => {
	return (
		<>
		  {(props.show) && (
				<View style={styles.container}>
					<Text style={styles.text}>Carregando...</Text>
				</View>
			)}
		</>
	);
};

Loading.defaultProps = {
	show: false
};

export default Loading;