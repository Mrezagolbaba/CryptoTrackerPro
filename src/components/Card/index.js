import React from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';
function CardItem(props) {
  const {
    id,
    name,
    symbol,
    all_time_high: {price, percent_down},
    market_data: {percent_change_usd_last_24_hours: change},
  } = props.data;

  const convertPercent = data => {
    if (data > 0) {
      return (
        <View style={styles.containerPersent}>
          <Icon name="arrow-top-right" size={20} color="green" />
          <Text style={styles.positiveNumber}>
            {`%` + `${Math.round(data * 100) / 100}`}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.containerPersent}>
          <Icon name="arrow-bottom-left" size={20} color="red" />
          <Text style={styles.negativeNumber}>
            {`%` + `${Math.round(data * 100) / 100}`}
          </Text>
        </View>
      );
    }
  };

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0],
    });
    return (
      <RectButton
        style={styles.leftAction}
        onPress={() => props.handleDelete(id)}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          Remove
        </Animated.Text>
      </RectButton>
    );
  };

  return (
    <Swipeable
      containerStyle={{width: '100%'}}
      renderLeftActions={renderLeftActions}>
      <View style={styles.cardContainer}>
        <View>
          {/* <Image /> */}
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.abbreviation}>{symbol}</Text>
        </View>
        <View style={styles.holderPrice}>
          {price && (
            <Text style={styles.price}>
              {`$` + `${Math.round(price * 100) / 100}`}
            </Text>
          )}
          {convertPercent(change)}
        </View>
      </View>
    </Swipeable>
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
    width: '100%',
  },
  holderPrice: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  positiveNumber: {
    color: 'green',
  },
  negativeNumber: {
    color: 'red',
  },
  name: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  abbreviation: {
    color: 'black',
    fontWeight: '300',
  },
  price: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  containerPersent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftAction: {
    display: 'flex',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontWeight: '500',
    paddingHorizontal: 10,
  },
});
export default CardItem;
