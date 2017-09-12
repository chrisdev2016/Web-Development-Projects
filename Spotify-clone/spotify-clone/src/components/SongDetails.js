import React, { Component } from 'react';

class SongDetails extends Component {
    render() {
        console.log(this.props)
        let id = this.props.routeParams.id
        console.log(id)

        let songs = this.props.songsArray
        console.log(songs)


        let mySong = songs.find((song) => {
            return song.id == id
        })
        console.log(mySong)
        



        return (
            <div>
                
                    <h1>{mySong.title}</h1>
                    
                    <p>{mySong.description}</p>
                
        
                    <button  onClick={()=>{this.props.playSong(mySong.id)}}><i className="glyphicon glyphicon-play"></i> </button>

            </div>
        )
    }
}

export default SongDetails;




