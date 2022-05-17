import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Item from '../../models/item';
import styles from './styles';

type SaveEventHandler = (item: Item) => void;

type Props = {
	item?: Item
	onSalvar?: SaveEventHandler
};

const ItemForm: React.FC<Props> = (props) => {

	const [nome, setNome] = useState(props.item?.nome);
	const [descricao, setDescricao] = useState(props.item?.descricao);

	const botoaSalvarPressionado = () => {
		if (nome && descricao) {
			if (props.onSalvar) {
				props.onSalvar({
					id: props.item?.id,
					nome,
					descricao
				});
			}
		}
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
					onPress={botoaSalvarPressionado}
				>
					<Text style={styles.botaoTexto} >Salvar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ItemForm;
export {
	type SaveEventHandler as ItemFormSaveEventHandler,
};