import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
	},

	conteudo: {
		flexGrow: 1,
		padding: 16,
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