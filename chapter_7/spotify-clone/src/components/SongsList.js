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

                <li className="list-group-item li" key={i}>

                    <button type="button" className="btn" onClick={() => this.props.playSong(item.id)}>
                        <i className="glyphicon glyphicon-play"></i>
                    </button>
                    <Link to={"songs/" + item.id}> {item.title}</Link>

                </li>

            )


        });

        console.log(items);


        return (
            <div className='container'>

                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">SPOTIFY-CLONE</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li ><a href="#">Home</a></li>
                            <li className="active"><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="list-group">{items}</ul>

            </div>
        )
    }
}

export default SongsList;