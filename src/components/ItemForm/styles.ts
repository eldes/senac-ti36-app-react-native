import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 32,
	},

	conteudo: {
	},

	campoTexto: {
		backgroundColor: '#fff',
		borderRadius: 5,
		fontSize: 18,
		marginBottom: 16,
		padding: 8,
	},

	areaTexto: {
		minHeight: 200,
		backgroundColor: '#fff',
		borderRadius: 5,
		fontSize: 18,
		marginBottom: 16,
		padding: 8,
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

export default styles;