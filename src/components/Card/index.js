import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function CardItem(props) {
  const {
    name,
    symbol,
    all_time_high: {price, percent_down},
    market_data: {percent_change_usd_last_24_hours: change},
  } = props.data;

  const convertPercent = data => {
    if (data > 0) {
      return (
        <Text style={styles.positiveNumber}>
          {`%` + `${Math.round(data * 100) / 100}`}
        </Text>
      );
    } else {
      return (
        <Text style={styles.negativeNumber}>
          {`%` + `${Math.round(data * 100) / 100}`}
        </Text>
      );
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View>
        {/* <Image /> */}
        <Text>{name}</Text>
        <Text>{symbol}</Text>
      </View>
      <View style={styles.holderPrice}>
        <Text>{`$` + `${Math.round(price * 100) / 100}`}</Text>
        {convertPercent(change)}
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
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    width: '95%',
  },
  holderPrice: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  positiveNumber: {
    color: 'green',
  },
  negativeNumber: {
    color: 'red',
  },
});
export default CardItem;
