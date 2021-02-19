import 'react-native-gesture-handler';

import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DETAIL_SCREEN, HOME_SCREEN, DELETE_DATA, ADD_DATA} from './contants';

const Context = React.createContext();

function HomeScreen({navigation}) {
  const {state, data, dispatch} = React.useContext(Context);

  const RenderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={styles.mr4}>{item.name}</Text>
      <Text onPress={() => dispatch({type: DELETE_DATA, payload: item.id})}>
        Hapus
      </Text>
    </View>
  );

  return (
    <View style={styles.view}>
      <Text>Home Screen {state}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(DETAIL_SCREEN)}
      />
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function DetailScreen() {
  const [value, setValue] = React.useState('');
  const {data, dispatch} = React.useContext(Context);

  const id = data.length > 0 ? data[data.length - 1].id + 1 : 0;

  const onPress = () => {
    dispatch({type: ADD_DATA, payload: {id, name: value}});
    setValue('');
  };

  return (
    <View style={styles.view}>
      <Text>Detail Screen</Text>
      <TextInput style={styles.input} onChangeText={setValue} value={value} />
      <Button title="Add Data" onPress={onPress} />
    </View>
  );
}

const Stack = createStackNavigator();

function reducer(state, action) {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case DELETE_DATA:
      return state.filter((x) => x.id !== action.payload);
    default:
      return state;
  }
}

function App() {
  const [state, setState] = React.useState(null);
  const [data, dispatch] = React.useReducer(reducer, []);

  return (
    <Context.Provider value={{state, setState, data, dispatch}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HOME_SCREEN}>
          <Stack.Screen
            name={HOME_SCREEN}
            component={HomeScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen name={DETAIL_SCREEN} component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  mr4: {
    marginRight: 30,
  },
});

export default App;
