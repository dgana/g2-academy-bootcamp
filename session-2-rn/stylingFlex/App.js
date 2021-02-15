import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import PropTypes from 'prop-types';

const CounterApp = ({start, name}) => {
  const {onPressMinus, onPressPlus, state} = useCounter(start, name);

  return (
    <View style={styles.container}>
      <Text>{state.name}</Text>
      <View style={styles.countBox}>
        <Pressable onPress={onPressMinus} style={styles.button}>
          <Text>-</Text>
        </Pressable>
        <Text>{state.total}</Text>
        <Pressable onPress={onPressPlus} style={styles.button}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const useCounter = (start, name) => {
  const [state, setState] = React.useState({name, total: start});

  const onPressMinus = () => {
    if (state.total > 0) {
      setState((x) => ({...x, total: x.total - 1}));
    }
  };

  const onPressPlus = () => {
    setState((x) => ({...x, total: x.total + 1}));
  };

  React.useEffect(() => {
    if (state.total > 10) {
      setState((x) => ({...x, total: 0}));
    }
  }, [state.total, setState]);

  return {onPressMinus, onPressPlus, state};
};

const App = () => {
  return <CounterApp name="G2Academy" start={5} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  button: {
    height: 30,
    width: 30,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default App;
