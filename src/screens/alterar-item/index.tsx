import { StackActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Item from '../../models/item';
import ItemScreen from '../item';
import { StackParams } from '../navigator';
import styles from './styles';

type Props = NativeStackScreenProps<StackParams, 'AlterarItem'>;

const AlterarItemScreen: React.FC<Props> = (props) => {
	const item = props.route.params.item;

	const [nome, setNome] = useState(item.nome);
	const [descricao, setDescricao] = useState(item.descricao);

	const boataSalvarPressionado = () => {
		const novoItem: Item = {
			id: item.id,
			nome: nome,
			descricao: descricao,
		};
		props.navigation.pop(1);
		props.navigation.dispatch(StackActions.replace('Item', {item: novoItem}));
	};

	return (
		<View style={styles.container}>
			<View style={styles.conteudo}>
				<TextInput
					style={styles.campoTexto}
					value={nome}
					onChangeText={setNome}
				/>
				<TextInput
					style={styles.areaTexto}
						multiline={true}
						value={descricao}
						onChangeText={setDescricao}
					/>
			</View>
			<View style={styles.botoes}>
				<TouchableOpacity
					style={styles.botao}
					onPress={boataSalvarPressionado}
				>
					<Text style={styles.botaoTexto}>Salvar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AlterarItemScreen;