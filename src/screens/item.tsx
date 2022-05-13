import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackParams } from './navigator';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
	},

	conteudo: {
		flexGrow: 1,
	},

	botoes: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  botao: {
    marginVertical: 16,
    backgroundColor: '#000',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

type Props = NativeStackScreenProps<StackParams, 'Item'>;

const ItemScreen: React.FC<Props> = (props) => {
	const item = props.route.params.item;

	useEffect(() => {
		props.navigation.setOptions({ title: item.nome })
	}, []);

	const botaoEditarPressionado = () => {
		props.navigation.navigate('AlterarItem', {item: item});
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
			</View>
		</View>
	);
};

export default ItemScreen;