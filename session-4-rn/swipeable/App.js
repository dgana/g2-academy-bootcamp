import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const goods = [
  {id: '0', text: 'Soap'},
  {id: '1', text: 'Shampoo'},
  {id: '2', text: 'Conditioner'},
  {id: '3', text: 'Toothpaste'},
  {id: '4', text: 'Tooth Brush'},
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={goods}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ListItem
            {...item}
            onSwipeFromLeft={() => alert('swiped from left!')}
            onRightPress={() => alert('pressed right!')}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
};

const Separator = () => <View style={styles.separator} />;

const ListItem = ({text, onSwipeFromLeft, onRightPress}) => (
  <Swipeable
    renderLeftActions={LeftActions}
    onSwipeableLeftOpen={onSwipeFromLeft}
    renderRightActions={(progress, dragX) => (
      <RightActions progress={progress} dragX={dragX} onPress={onRightPress} />
    )}>
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </Swipeable>
);

const RightActions = ({progress, dragX, onPress}) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rightAction}>
        <Animated.Text style={[styles.actionText, {transform: [{scale}]}]}>
          Delete
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100], // menampilkan actionText setelah digeser sejauh 100px
    outputRange: [0, 1], // untuk menegaskan bahwa tampilkan seluruh text (1) setelah melakukan swipe
    extrapolate: 'clamp', // untuk membatasi ukuran text hanya sampai ukuran aslinya
  });
  return (
    <View style={styles.leftAction}>
      <Animated.Text style={[styles.actionText, {transform: [{scale}]}]}>
        Add to Cart
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: '#4a4a4a',
    fontSize: 15,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#e4e4e4',
    marginLeft: 10,
  },
  leftAction: {
    backgroundColor: '#388e3c',
    justifyContent: 'center',
    flex: 1,
  },
  rightAction: {
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    alignItems: 'flex-end', // agar text kita berada disebelah kanan
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
});

export default App;
