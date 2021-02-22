import React from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    async function getUsers() {
      const users = await firestore().collection('users').get();
      const test = users.docs;
      const result = test.map((x) => x.data());
      setUser(result);
    }
    getUsers();
  }, []);

  const renderItem = ({item}) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <SafeAreaView style={styles.view}>
      <FlatList
        data={user}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon',
  },
});

export default App;
