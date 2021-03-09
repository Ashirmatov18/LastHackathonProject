import React, { Component, useEffect,useState } from 'react';
import {musicArr} from '../../music/music';
import Lights from '../../music/Lights.mp3';
import Billionaire from '../../music/Billionaire.mp3';
import Us from '../../music/Us.mp3'
import {Howl, Howler} from 'howler';
import Button from '@material-ui/core/Button';
import classes from './Muse.css';
import  Linkin from '../../music/Linkin.mp3'
import Tears from '../../music/Tears.mp3';
import Sheeran from '../../music/Sheeran.mp3';
import Gorillaz from '../../music/Gorillaz.mp3'


const audioClips = [
    {sound: Lights, label: 'Lights'},
    {sound: Billionaire , label: 'Billionaire'},
    {sound: Us, label : 'Us'},
    {sound: Linkin , label : 'Linkin'},
    {sound: Tears , label : 'Tears'},
    {sound: Sheeran, label: 'Sheeran'},
    {sound: Gorillaz, label : 'Gorillaz'}
]
class Muse extends Component{
    
 //   const [audioIndex, setAudioIndex] = useState(0);
 //   const [audio,setAudio]= useState(new Audio(musicArr[audioIndex]));
//    const [play,setPlay] = useState(false);
 //   const toggle = () => {
//     setPlay(!play)
//   }

//   useEffect(()=>{
    //     play ? audio.play() : audio.pause()
    //   },[play])
    
    //   function nextSong(){
//     setPlay(false);
//     setAudioIndex(audioIndex + '1')
//     setPlay(true);
//   }

SoundPlay = (src)=>{
    const sound = new Howl({
        src
    })
    sound.play()
}

RenderButtonSound =()=>{
    return audioClips.map((item, index)=>{
        return (
            <Button className ='buttonMus' key ={index} onClick={()=>this.SoundPlay(item.sound)} variant="outlined" color="secondary">
                {item.label}
            </Button>
        )
    })
}
// TogglePlay= ()=>{
//     return sound.playing() ? sound.pause() : sound.play();
// };
render(){
    Howler.volume(0.4)
return (
        <div>
            {/* <button onClick={()=>()}>Press</button> */}
            {this.RenderButtonSound()}
             {/* <div><button style={{marginRight: 10}} onClick ={()=> toggle()} >play</button><button onClick={nextSong} >next</button></div> */}
        </div>
    );
}
};

export default Muse;