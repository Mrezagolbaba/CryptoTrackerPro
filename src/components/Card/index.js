import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function CardItem(props) {
  const {name, symbol, all_time_high} = props.data;
  return (
    <View style={styles.cardContainer}>
      <View>
        {/* <Image /> */}
        <Text>{name}</Text>
        <Text>{symbol}</Text>
      </View>
      <View>
        <Text>{`$` + `${Math.round(all_time_high.price * 100) / 100}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
});
export default CardItem;
