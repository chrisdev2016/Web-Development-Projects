import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      playStatus: false,
      index: 0

    }

    this.playSong = this.playSong.bind(this)
    // this.pauseSong = this.pauseSong.bind(this)
    this.changeSong = this.changeSong.bind(this)
    this.playHandler = this.playHandler.bind(this)



  }

  changeSong(direction) {
    this.setState({
      index: this.state.index + direction,
      playStatus:true
    
    }, ()=>{
      var playsong = document.getElementById('audioElementId');
    playsong.play()
    })


        
  }


  playHandler() {
 
    var playsong = document.getElementById('audioElementId');
    playsong.play()
  

  }

  playSong(id) {
     
    this.setState({
      index:parseInt( id),
      playStatus:true
    }, ()=>{ var playsong = document.getElementById('audioElementId')
    playsong.play()})

   
  }

 

  render() {
    const songs = this.props.route.songs


    return (
      <div className="App bg">
        <div className="btn-group">
          <button onClick={()=>{this.changeSong(-1)}} disabled={this.state.index===0} ><i className='glyphicon glyphicon-step-backward'/></button>
          <button><audio onplay={this.playHandler} id="audioElementId" src={songs[this.state.index].source} type='audio/mpeg' controls ></audio></button>
          <button onClick={()=>{ this.changeSong(1)}} disabled={this.state.index===songs.length-1} ><i className="glyphicon glyphicon-step-forward"/> </button>
        </div>

        {React.cloneElement(this.props.children, { songsArray: songs, changeSong: this.changeSong ,playSong:this.playSong})}
        {/*if you dont use clone element, you can use just {this.props.children} here like before*/}
      </div>
    );
  }
}

export default App;
