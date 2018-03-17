import React from 'react';
import Key from '../key';



class Octave extends React.Component {
  render () {
    const {octave} = this.props;
    return (
      [
          <Key note={"C"} i={0} octave={octave} key={0}/>,
          <Key note={"D"} i={1} octave={octave} key={1}/>,
          <Key note={"E"} i={2} octave={octave} key={2}/>,
          <Key note={"F"} i={3} octave={octave} key={3}/>,
          <Key note={"G"} i={4} octave={octave} key={4}/>,
          <Key note={"A"} i={5} octave={octave} key={5}/>,
          <Key note={"B"} i={5} octave={octave} key={6}/>,
          <Key note={"C#"} type={"black"} i={1} octave={octave} key={7}/>,
          <Key note={"D#"} type={"black"} i={2} octave={octave} key={8}/>,
          <Key note={"F#"} type={"black"} i={4} octave={octave} key={9}/>,
          <Key note={"G#"} type={"black"} i={5} octave={octave} key={10}/>,
          <Key note={"A#"} type={"black"} i={6} octave={octave} key={11}/>
      ]
    )
  }
}

export default Octave