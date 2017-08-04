import React, { Component } from 'react';
import { Link } from 'react-router'


class SongsList extends Component {

    constructor() {
        super();
       

      


    }


  


    render() {

        //  let songsList = this.props.routes[0].songs ----use this if you didnt use clone element in the app.js

        let songsList = this.props.songsArray
        console.log(this.props)
        let items = songsList.map((item, i) => {
            return (
                
                <li className="list-group-item" key={i}>
                    
                    <button  type="button" className="btn" onClick={() => this.props.playSong(item.id)}>
                        <i className="glyphicon glyphicon-play"></i>
                    </button>
                    <Link to={"songs/"+item.id}> {item.title}</Link>

                </li>
            
                )


        });

        console.log(items);


        return (
            <div >
                
                <ul className="list-group">{items}</ul>
                
            </div>
        )
    }
}

export default SongsList;