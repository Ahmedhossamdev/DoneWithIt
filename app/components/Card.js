import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.price}>{props.price}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },

  price: {
    color: colors.secondary,
    fontWeight: 'bold',
  },

  title: {
    color: colors.primary,
    marginBottom: 7,
  },

  image: {
    width: '100%',
    height: 200,
  },

  detailsContainer: {
    padding: 20,
  },
});

export default Card;
