import React, { Component, Fragment } from 'react';
import { Platform, StyleSheet, FlatList, Text, View, Image } from 'react-native';

import users from './data.json';

const thumbImage = 'https://cdn0.iconfinder.com/data/icons/typicons-2/24/contacts-512.png';

class App extends Component {

  contactItem = item => {
    console.log('item ', item);
    return(
      <View style={styles.itemStyle}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <Fragment>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: thumbImage}}
          />
        </View>
        <FlatList
          data={users}
          renderItem={(data) => this.contactItem(data.item)}
          keyExtractor={(data) => data.id.toString()}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8c00'
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  itemStyle: {
    padding: 15,
    borderColor: 'lightgray',
    borderBottomWidth: 0.5
  }
});

export default App;