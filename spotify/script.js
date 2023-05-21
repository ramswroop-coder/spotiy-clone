console.log("Welcome to spotify");
let songIndex=1;
let audioElement=new Audio('songs/1.mp3');
let master_play=document.getElementById("play");
let next=document.getElementById("forward");
let backward=document.getElementById("backward");
let gif =document.getElementById("gif")
let master_song_name=document.getElementById("masterSongName");
let bar=document.getElementById("time");

// let sontItems=Array.from(document.getElementsByClassName("song_item"));
let songs = [
    {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "My baby", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "I love you voice", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Infinity", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ride it", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dynamite", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Dusk till tawn", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Haibibi", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"}
   
]
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    bar.value = progress;
})
bar.addEventListener('change',()=>{
    audioElement.currentTime=audioElement.duration*bar.value/100;

})
master_play.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        master_play.classList.remove('fa-pause');
        master_play.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
next.addEventListener('click',()=>{
    songIndex=songIndex+1;
    if(songIndex==9){
        songIndex=1;
    }
    audioElement.src='songs/'+songIndex.toString()+'.mp3';
    audioElement.play();
    master_play.classList.remove('fa-play');
    master_play.classList.add('fa-pause');
    audioElement.currentTime=0;
    master_song_name.innerHTML=songs[songIndex-1].songName;
})
backward.addEventListener('click',()=>{
    songIndex=songIndex-1;
    if(songIndex==0){
        songIndex=8;
    }
    audioElement.src='songs/'+songIndex.toString()+'.mp3';
    audioElement.play();
    master_play.classList.remove('fa-play');
    master_play.classList.add('fa-pause');
    audioElement.currentTime=0;
    master_song_name.innerHTML=songs[songIndex-1].songName;

})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("play_button")).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName("play_button")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        songIndex=parseInt(e.target.id);
        audioElement.src='songs/'+songIndex.toString()+'.mp3';
        audioElement.play();
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
        master_song_name.innerHTML=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        gif.style.opacity=1;
    })
})
