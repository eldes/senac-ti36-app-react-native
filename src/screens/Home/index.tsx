import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import FloatingActionButton from '../../components/FloatingActionButton';
import Loading from '../../components/Loading';
import Item from '../../models/item';
import { StackParams } from '../navigator';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FlatListItem, { FlatListItemPressEventHandler } from '../../components/FlatListItem';

type Props = NativeStackScreenProps<StackParams, 'Home'>;

const HomeScreen: React.FC<Props> = (props) => {

  Icon.loadFont();

  props.navigation.setOptions({
    headerTitle: 'Itens App',
    headerRight: () => (
      <TouchableOpacity style={styles.syncButton} onPress={botaoSyncPressionado}>
        <Icon name="sync" size={20} color="#fff" />
      </TouchableOpacity>
      )
  });

	const [loading, setLoading] = useState(false);

  const [data, setData] = useState<Item[]>([]);

  const recarregaItens = useCallback(() => {
		setLoading(true);
    axios.get<Item[]>('http://localhost:4000/api/itens')
    .then((res) => {
      setData(res.data);
			setLoading(false);
    })
    .catch((error) => {
      console.log(error);
			setLoading(false);
    });
  }, []);

  useFocusEffect(recarregaItens);

  const botaoSyncPressionado = () => {
    recarregaItens();
  };

  const renderItem: ListRenderItem<Item> = ({item}) => {
    
    const itemPressionado: FlatListItemPressEventHandler  = () => {
      props.navigation.navigate('Item', {item: item});
    };

    return (
      <FlatListItem item={item} onPress={itemPressionado} />
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
      <FloatingActionButton iconName='add' onPress={botaoCriarPressionado} />
			<Loading show={loading} />
    </View>
     
  )
};

export default HomeScreen;