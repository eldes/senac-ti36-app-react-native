import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  syncButton: {
    padding: 8,
  },

  flatList: {
    flexGrow: 1,
    height: 1,
  },

  listItem: {
    backgroundColor: '#ff0',
    padding: 20,
    marginBottom: 20,
  },

  listItemText: {
    fontSize: 24,
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