import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchIrrigationData } from '../services/api';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const irrigationData = await fetchIrrigationData();
      setData(irrigationData);
    };
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Monitoramento de Irrigação" />
      <FlatList
        data={data}
        renderItem={({ item }) => (
            <ListItem status={item.status} timestamp={item.timestamp} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.body} // Aplica o estilo ao conteúdo
      />

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
    },
    body: {
      paddingHorizontal: 10, // Adiciona espaçamento interno
      flexGrow: 1,
    },
  });
  

export default HomeScreen;
