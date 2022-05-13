import { StackActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackParams } from './navigator';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		padding: 24,
	},

	alertaErro: {
		backgroundColor: '#f99',
		padding: 24,
		marginBottom: 16,
		borderRadius: 8,
	},

	alertaSucesso: {
		backgroundColor: '#9c9',
		padding: 24,
		marginBottom: 16,
		borderRadius: 8,
	},

	button: {
		backgroundColor: '#000',
		alignSelf: 'center',
		paddingHorizontal: 16,
		paddingVertical: 8,
	},

	buttonText: {
		color: '#fff',
		fontSize: 18,
		textTransform: 'uppercase',
	},
});

type Props = NativeStackScreenProps<StackParams, 'Login'>;

const LoginScreen: React.FC<Props> = (props) => {

	useEffect(() => {
		props.navigation.dispatch(StackActions.replace('Home'))
	}, []);

	const [nomeUsuario, setNomeUsuario] = useState('');
	const [senha, setSenha] = useState('');

	const [mostraErro, setMostraErro] = useState(false);
	const [mostraSucesso, setMostraSucesso] = useState(false);

	const botaoEntrarPressionado = () => {
		const loginCorreto = (nomeUsuario === 'adm') && (senha === '123');
		setMostraSucesso(loginCorreto)
		setMostraErro(!loginCorreto)

		if (loginCorreto) {
			props.navigation.dispatch(StackActions.replace('Home'));
		}
	};

	return (
		<View style={styles.container}>
			{
				mostraErro &&
				<View style={styles.alertaErro}>
					<Text>ERRO: Login inválido.</Text>
				</View>
			}
			{
				mostraSucesso &&
				<View style={styles.alertaSucesso}>
					<Text>SUCESSO: Bem-vindo.</Text>
				</View>
			}
			
			<TextInput
				placeholder='Nome de usuário'
				onChangeText={setNomeUsuario}
			/>
			<TextInput
				placeholder='Senha'
				onChangeText={setSenha}
			/>
			<TouchableOpacity style={styles.button} onPress={botaoEntrarPressionado}>
				<Text style={styles.buttonText}>Entrar</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;