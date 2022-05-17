import { StackActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Loading from '../../components/Loading';
import { StackParams } from '../navigator';
import styles from './styles';

type Props = NativeStackScreenProps<StackParams, 'Item'>;

const ItemScreen: React.FC<Props> = (props) => {
	const item = props.route.params.item;

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		props.navigation.setOptions({ title: item.nome })
	}, []);

	const botaoEditarPressionado = () => {
		props.navigation.navigate('AlterarItem', {item: item});
	};

	const botaoRemoverPressionado = () => {
		setLoading(true);
		axios.delete(`http://localhost:4000/api/itens/${item.id}`)
		.then(() => {
			setLoading(false);
			props.navigation.pop(1);
			props.navigation.dispatch(StackActions.replace('Home'));
		})
		.catch(error => {
			alert(error.message);
			setLoading(false);
		});
		
	};

	return (
		<View style={styles.container}>
			<View style={styles.conteudo}>
				<Text>{item.descricao}</Text>
			</View>
			<View style={styles.botoes}>
				<TouchableOpacity style={styles.botao}>
					<Text style={styles.botaoTexto} onPress={botaoEditarPressionado}>Editar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.botao}>
					<Text style={styles.botaoTexto} onPress={botaoRemoverPressionado}>Remover</Text>
				</TouchableOpacity>
			</View>
			<Loading show={loading} />
		</View>
	);
};

export default ItemScreen;