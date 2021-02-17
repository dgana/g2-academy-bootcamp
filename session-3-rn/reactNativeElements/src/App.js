import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  Button,
  ThemeProvider,
  Avatar,
  Badge,
  ListItem,
  BottomSheet,
  ButtonGroup,
} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CartProvider, useCartContext} from './store';
import {ADD_CART, DELETE_CART} from './store/constants';

import theme from './theme';

const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(2);

  const list = [
    {title: 'List Item 1'},
    {title: 'List Item 2'},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisible(false),
    },
  ];

  const updateIndex = (idx) => {
    setSelectedIndex(idx);
  };

  const component1 = () => <Text>Hello</Text>;
  const component2 = () => <Text>World</Text>;
  const component3 = () => <Text>ButtonGroup</Text>;

  const buttons = [
    {element: component1},
    {element: component2},
    {element: component3},
  ];

  return (
    <CartProvider>
      <SafeAreaProvider style={styles.flex1}>
        <ThemeProvider theme={theme}>
          <View style={[styles.flex1, styles.bgPowderBlue]}>
            <Text>Heading 1</Text>
          </View>

          <ComponentInsideCartProvider setIsVisible={setIsVisible} />

          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.height}
          />

          <BottomSheet
            isVisible={isVisible}
            containerStyle={styles.bgBottomSheet}>
            {list.map((l, i) => (
              <ListItem
                key={i}
                containerStyle={l.containerStyle}
                onPress={l.onPress}>
                <ListItem.Content>
                  <ListItem.Title style={l.titleStyle}>
                    {l.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </BottomSheet>

          <View style={[styles.flex3, styles.bgSteelBlue]} />
        </ThemeProvider>
      </SafeAreaProvider>
    </CartProvider>
  );
};

const ComponentInsideCartProvider = ({setIsVisible}) => {
  const {state, dispatch} = useCartContext();

  React.useEffect(() => {
    dispatch({type: ADD_CART, payload: 4});
  }, [dispatch]);

  return (
    <>
      {state.map((x) => (
        <Text>{x}</Text>
      ))}
      <View style={[styles.flex2, styles.margin20]}>
        <Button
          onPress={() => dispatch({type: DELETE_CART, payload: 4})}
          title="Klik disini"
        />
        <Button onPress={() => setIsVisible(true)} title="open bottom sheet" />
      </View>

      <View style={[styles.bgPowderBlue, styles.avatarContainer]}>
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="large"
        />
        <Badge status="success" containerStyle={styles.badge} />
      </View>

      <View style={[styles.bgPowderBlue, styles.avatarContainer]}>
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="large"
        />
        <Badge status="success" containerStyle={styles.badge} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  margin20: {
    margin: 20,
  },
  bgPowderBlue: {
    backgroundColor: 'powderblue',
  },
  bgSkyBlue: {
    backgroundColor: 'skyblue',
  },
  bgSteelBlue: {
    backgroundColor: 'steelblue',
  },
  image: {
    width: 200,
    height: 200,
  },
  avatarContainer: {
    position: 'relative',
  },
  bgBottomSheet: {
    backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)',
  },
  height: {
    height: 100,
  },
  badge: {position: 'absolute', top: 12, left: 60},
});

export default App;
