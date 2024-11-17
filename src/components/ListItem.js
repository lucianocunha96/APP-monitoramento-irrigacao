import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ status, timestamp }) => {
  const isOn = status === 'ligado';

  return (
    <View style={[styles.container, isOn ? styles.on : styles.off]}>
      <Text style={[styles.tag, isOn ? styles.onTag : styles.offTag]}>
        {isOn ? 'Irrigação ligada' : 'Irrigação desligada'}
      </Text>
      <Text style={styles.text}>
        {`Sistema ${isOn ? 'ligado' : 'desligado'} em ${timestamp}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Coloca os itens em coluna
    alignItems: 'flex-start', // Alinha os itens à esquerda
    padding: 15,
    marginVertical: 8,
    borderLeftWidth: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    alignSelf: 'center',
  },
  tag: {
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
    color: '#fff',
    marginBottom: 5, // Espaçamento entre a tag e o texto
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  on: {
    borderLeftColor: 'orange',
  },
  off: {
    borderLeftColor: 'green',
  },
  onTag: {
    backgroundColor: 'orange',
  },
  offTag: {
    backgroundColor: 'green',
  },
});

export default ListItem;
