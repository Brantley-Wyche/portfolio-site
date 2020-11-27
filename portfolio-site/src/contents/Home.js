import React,  { Component } from 'react';

import ReactTypingEffect from 'react-typing-effect';

import profilepic from '../img/my_Face.jpg';

class Home extends Component{

    render(){
        return(
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>

                <ReactTypingEffect className="typingeffect" text={['I am Brantley Wyche','Welcome to my site!']} speed={100} eraseDelay={700}/>

            </div>
        )
    }
}

export default Home;