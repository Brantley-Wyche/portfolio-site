import React,  { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';


class Home extends Component{

    render(){

        return(

            //Main content of Home Page
            <main style={{ flexGrow: 1, padding: 24 }}>
                <div className="condiv home">
                    
                    <img src={require("../img/discord-img.png")}/>
                    <ReactTypingEffect className="typingeffect" text={['I am Brantley Wyche','Welcome to my Website!']} speed={100} eraseDelay={700}/>
                    
                </div>
            </main>
        )
    }
}

export default Home;