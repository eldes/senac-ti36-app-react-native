import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useState } from 'react';
import { View } from 'react-native';
import ItemForm, { ItemFormSaveEventHandler } from '../../components/ItemForm';
import Loading from '../../components/Loading';
import { StackParams } from '../navigator';

type Props = NativeStackScreenProps<StackParams, 'CriarItem'>;

const CriarItemScreen: React.FC<Props> = (props) => {

	const [loading, setLoading] = useState(false);

	const itemFormSalvar: ItemFormSaveEventHandler = (item) => {
		setLoading(true);
		axios.post('http://localhost:4000/api/itens', item)
		.then(() => {
			setLoading(false);
			props.navigation.pop(1);
		})
		.catch((error) => {
			setLoading(false);
			alert(error.message);
		});
	};
	
	return (
		<View>
			<ItemForm onSalvar={itemFormSalvar} />
			<Loading show={loading} />
		</View>
	);
};

export default CriarItemScreen;