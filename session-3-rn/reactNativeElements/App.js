import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={[styles.flex1, styles.bgPowderBlue]} />
        <View style={[styles.flex2]}>
          <ThemeProvider>
            <Button title="Click Here!" />
          </ThemeProvider>
        </View>
        <View style={[styles.flex3, styles.bgSteelBlue]} />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
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
});

export default App;
