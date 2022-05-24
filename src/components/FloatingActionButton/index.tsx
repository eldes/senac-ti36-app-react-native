import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type Props = {
	iconName: string
	onPress?: () => void
};

const FloatingActionButton: React.FC<Props> = (props) => {
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<Icon name={props.iconName} size={20} color="#fff" />
		</TouchableOpacity>
	);
};

export default FloatingActionButton;