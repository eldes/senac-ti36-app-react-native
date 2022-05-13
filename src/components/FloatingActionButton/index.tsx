import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type Props = {
	onPress?: () => void
};

const FloatingActionButton: FunctionComponent<Props> = (props) => {
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<Text style={styles.texto}>+</Text>
		</TouchableOpacity>
	);
};

export default FloatingActionButton;