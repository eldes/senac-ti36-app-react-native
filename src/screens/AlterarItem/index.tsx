import { StackActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useState } from 'react';
import { View } from 'react-native';
import ItemForm from '../../components/ItemForm';
import Loading from '../../components/Loading';
import Item from '../../models/item';
import { StackParams } from '../navigator';

type Props = NativeStackScreenProps<StackParams, 'AlterarItem'>;

const AlterarItemScreen: React.FC<Props> = (props) => {
	const [loading, setLoading] = useState(false);
	const item = props.route.params.item;

	const itemFormSalvar = (item: Item) => {
		setLoading(true);
		axios.put(`http://localhost:4000/api/itens/${item.id}`, item)
		.then(() => {
			props.navigation.pop(1);
			props.navigation.dispatch(StackActions.replace('Item', {item}));
			setLoading(false);
		})
		.catch((error) => {
			alert(error.message);
			setLoading(false);
		});
		
	};

	return (
		<View>
			<ItemForm item={item} onSalvar={itemFormSalvar} />
			<Loading show={loading} />
		</View>
	);
};

export default AlterarItemScreen;