import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Item from '../../models/item';
import styles from './styles';

type PressEventHandler = () => void

type Props = {
	item: Item
	onPress?: PressEventHandler
};

const FlatListItem: React.FC<Props> = (props) => {

	return (
		<TouchableOpacity onPress={props.onPress} style={styles.container}>
			<Text style={styles.texto}>{props.item.nome}</Text>
			<Icon name='arrow-forward-ios' size={20} color="#000" />
		</TouchableOpacity>);
};

export default FlatListItem;
export {
	type PressEventHandler as FlatListItemPressEventHandler,
};