import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import {Appbar, TextInput, Button, List} from 'react-native-paper';

const ref = firestore().collection('todos');

const App = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  async function addTodo() {
    await ref.add({
      title: value,
      complete: false,
    });
    setValue('');
  }

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((x) => {
        const {title, complete} = x.data();
        list.push({
          id: x.id,
          title,
          complete,
        });
      });

      setTodos(list);

      if (loading) {
        setLoading(false);
      }
    });
    //
  }, [loading]);

  return (
    <SafeAreaView style={styles.flex1}>
      <Appbar>
        <Appbar.Content title={'TODOs List'} />
      </Appbar>
      <ScrollView style={styles.flex1}>
        <Text>List of TODOs!</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            style={styles.flex1}
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Todo {...item} />}
          />
        )}
      </ScrollView>
      <TextInput label={'New Todo'} value={value} onChangeText={setValue} />
      <Button onPress={addTodo}>Add TODO</Button>
    </SafeAreaView>
  );
};

function Todo({id, title, complete}) {
  // complete = true / false
  async function toggleComplete() {
    await firestore().collection('todos').doc(id).update({
      complete: !complete,
    });
  }

  return (
    <List.Item
      title={title}
      onPress={() => toggleComplete()}
      left={(props) => (
        <List.Icon {...props} icon={complete ? 'check' : 'cancel'} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});

export default App;
