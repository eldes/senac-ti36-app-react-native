import { StackActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import ItemForm from '../../components/ItemForm';
import Item from '../../models/item';
import ItemScreen from '../Item';
import { StackParams } from '../navigator';
import styles from './styles';

type Props = NativeStackScreenProps<StackParams, 'AlterarItem'>;

const AlterarItemScreen: React.FC<Props> = (props) => {
	const item = props.route.params.item;

	const [nome, setNome] = useState(item.nome);
	const [descricao, setDescricao] = useState(item.descricao);

	const itemFormSalvar = (item: Item) => {
		props.navigation.pop(1);
		props.navigation.dispatch(StackActions.replace('Item', {item}));
	};

	return (
		<ItemForm item={item} onSalvar={itemFormSalvar} />
	);
};

export default AlterarItemScreen;