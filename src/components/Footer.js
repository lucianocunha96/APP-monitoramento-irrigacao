import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Monitoramento de Irrigação</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  text: {
    color: '#666',
    fontSize: 14,
  },
});

export default Footer;
