import React from 'react';
import { StyleSheet,ScrollView,View, TouchableOpacity } from 'react-native'
import Octave from '../octave';
import MenuBar from '../menuBar';


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  keyboard:{
    // flex:1,
    height:"28%",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});

class Keyboard extends React.Component {

  componentDidMount() {
    const _scrollView = this.scrollView;

    setTimeout(() => {
      _scrollView.scrollTo({x:450,y:0,animated:true});
      console.log("called DidMount");
    }, 1);
  }

  render () {
    return (
      <View style={styles.keyboard}>
        <MenuBar/>
        <ScrollView
          horizontal = {true} d
          ref={scrollView => this.scrollView = scrollView}
        >
          {
            [...Array(4)].map((x, i) =>
              <Octave octave={i} key={i} />
            )
          }
        </ScrollView>
      </View>
    )
  }
}

export default Keyboard