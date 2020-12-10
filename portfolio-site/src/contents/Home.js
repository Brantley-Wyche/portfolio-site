import React,  { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Image from 'react-bootstrap/Image';

class Home extends Component{

    render(){
        return(
            <div className="condiv home">
                <Image src={require("../img/discord-img.png")}  roundedCircle />

                <ReactTypingEffect className="typingeffect" text={['I am Brantley Wyche','Welcome to my Website!']} speed={100} eraseDelay={700}/>

            </div>
        )
    }
}

export default Home;