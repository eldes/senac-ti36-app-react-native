import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FloatingActionButton from '../components/FloatingActionButton';
import Item from '../models/item';
import { StackParams } from './navigator';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
})

type Props = NativeStackScreenProps<StackParams, 'Home'>;

const HomeScreen: React.FC<Props> = (props) => {

  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    axios.get<Item[]>('http://localhost:4000/api/itens')
    .then((res) => {
      setData(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[data]);

  const renderItem: ListRenderItem<Item> = ({item}) => {
    
    const itemPressionado = () => {
      props.navigation.navigate('Item', {item: item});
    };

    return (
      <TouchableOpacity onPress={itemPressionado} style={styles.listItem}>
        <Text style={styles.listItemText}>{item.nome}</Text>
      </TouchableOpacity>
    )
  }

  const botaoCriarPressionado = () => {
    props.navigation.navigate('CriarItem');
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        renderItem={renderItem}
        data={data}
      />
      <FloatingActionButton onPress={botaoCriarPressionado} />
    </View>
     
  )
};

export default HomeScreen;