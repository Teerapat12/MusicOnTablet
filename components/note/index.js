import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet,ScrollView,View, Text, Image, InteractionManager } from 'react-native'

import MusicRoom from '../musicRoom';


const styles = StyleSheet.create({
  note:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    marginTop:200
  },
  clefs:{
    width: 50,
    height: 150,
    position: 'absolute',
    left: 0,
    right: 0,
    top: -7,
    },
});



class Note extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      contentWidth:0
    };
  }


  renderNotes(notes){
    const maxNoteIndex = notes.length>0?Math.max(...notes.map(note=>note.index)):0;

    const musicRoomSize = 4;
    let musicSheet = []
    for(let i=0;i<=maxNoteIndex;i+=musicRoomSize){
      const selectedNote = notes.filter(note=>note.index>=i&& note.index<i+4);

      musicSheet.push(<MusicRoom notes={selectedNote} size={musicRoomSize} key={i}/>);
    }

    return musicSheet
  }


  scrollToRight() {
    //TODO: Find how to make it such that when add new note it scroll to that position.
    const _scrollView = this.scrollView;

    setTimeout(() => {
      _scrollView.scrollTo({x:1000000,y:0,animated:true});
      console.log("called DidMount");
    }, 1);
  }

  componentDidMount(){
    this.scrollToRight();
  }



  render () {
    const {notes, option} = this.props;
    const {currentTempoType, currentIndex} = option;
    return (
      <View style={styles.note}>
        <Text>Notes! {notes.length>0?Math.max(...notes.map(note=>note.index)):0}</Text>
        {/*<Text>{notes}</Text>*/}

        <ScrollView
          horizontal = {true}
          ref={scrollView => this.scrollView = scrollView}
          onContentSizeChange={(w,h)=>this.scrollToRight()}
        >
          <View>
            <Image
              source={{uri:'https://cdn.pixabay.com/photo/2016/04/07/22/09/note-1314943_1280.png'}}
              style={styles.clefs}
            />
            <Text>               </Text>
          </View>
          {this.renderNotes(notes)}

        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    notes:state.data.notes,
    option:state.data.option
  }
}

export default connect(mapStateToProps)(Note)