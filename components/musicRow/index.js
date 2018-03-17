import React from 'react';
import { StyleSheet,ScrollView,View, TouchableOpacity } from 'react-native'



class MusicRow extends React.Component {
  render () {
    return (
      <View style={styles.keyboard}>
        <ScrollView horizontal = {true}>
          <Text>Heree</Text>
          <Text>Heree</Text>
          <Text>Heree</Text>
          <Text>Heree</Text>
        </ScrollView>
      </View>
    )
  }
}

export default MusicRow