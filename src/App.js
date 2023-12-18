
import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    
      songName: ' Har Har Shambhu Shiv Mahadeva',
      songArtist: 'Jeetu Sharma',
      songSrc: './Assets/songs/mahadev.mp3',
      songAvatar: 'https://pbs.twimg.com/profile_images/1432419933808300032/yvXaa_AD_400x400.jpg'
    
  })

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('05 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0)

  const currentAudio = useRef()

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  //Change Avatar Class
  let avatarClass = ['objectFitCover', 'objectFitContain', 'none']
  const [avatarClassIndex, setAvatarClassIndex] = useState(0)
  const handleAvatar = () => {
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0)
    } else {
      setAvatarClassIndex(avatarClassIndex + 1)
    }
  }


  //Play Audio Function
  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true)
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false)
    }
  }

  const musicAPI = [

    {
      songName: ' Har Har Shambhu Shiv Mahadeva',
      songArtist: 'Jeetu Sharma',
      songSrc: './Assets/songs/mahadev.mp3',
      songAvatar: 'https://pbs.twimg.com/profile_images/1432419933808300032/yvXaa_AD_400x400.jpg'
      
    },


    {
      songName: ' Chaand Baaliyan',
      songArtist: 'Aditya A',
      songSrc: 'https://pwdown.info/113604/Chaand%20Baaliyan%20-%20Aditya%20A.mp3',
      songAvatar: 'https://www.pagalworld.tv/GpE34Kg9Gq/113604/148955-chaand-baaliyan-aditya-a-mp3-song-300.jpg',
      
    },
    {
      songName: 'Thandi Thandi ',
      songArtist: 'Gulzaar Chhaniwala',
      songSrc: './Assets/songs/Thandi Thandi.mp3',
      songAvatar: 'https://pagalnew.com/coverimages/Thandi-Thandi-Gulzaar-Chhaniwala-500-500.jpg'
      
    },

    {
      songName: 'Excuses',
      songArtist: ' AP Dhillon ',
      songSrc: './Assets/songs/Excuses.mp3',
      songAvatar: 'https://c.saavncdn.com/103/Excuses-Punjabi-2022-20220222062344-500x500.jpg'
    },
    
    {
      songName: 'Brown Munde',
      songArtist: 'AP Dhillon, Gurinder Gill, Shinda Kahlon, Gminxr',
      songSrc: 'https://paglasongs.com/files/download/id/2977',
      songAvatar: 'https://c.saavncdn.com/973/Brown-Munde-Unknown-2020-20200915002420-500x500.jpg'
    },
    {
      songName: 'Deva Deva',
      songArtist: 'Arijit Singh, Jonita Gandhi, Pritam Chakraborty, Amitabh Bhattacharya',
      songSrc: './Assets/songs/Deva Deva.mp3',
      songAvatar: 'https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-500x500.jpg'
    } ,
    {
      songName: 'Besabriyaan',
      songArtist: 'Armaan Malik, Amaal Mallik',
      songSrc: './Assets/songs/Besabriyaan.mp3',
      songAvatar: 'https://i.pinimg.com/564x/7f/7f/99/7f7f9904aa6c23f4be1bc71affc8a80a.jpg'
    }
  
  ]

  const handleNextSong = () => {
    if (musicIndex >= musicAPI.length - 1 && videoIndex >= vidArray.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
      setVideoIndex(0);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
      setVideoIndex(videoIndex + 1)
    }
  }

  const handlePrevSong = () => {
    if (musicIndex === 0 && videoIndex <= vidArray.length - 1 ) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
      setVideoIndex(6);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
      setVideoIndex(videoIndex - 1)
    }
  }

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar
    })
    setIsAudioPlaying(true);
  }

  const handleAudioUpdate = () => {
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress) ? 0 : progress)
  }


  const vidArray = ['./Assets/videos/video1.mp4', './Assets/Videos/video2.mp4','./Assets/Videos/video3.mp4 ', './Assets/Videos/video4.mp4 ', './Assets/Videos/video5.mp4 ','./Assets/Videos/video6.mp4 ' ,'./Assets/Videos/video7.mp4 '];

  // const handleChangeBackground = () => {
  //   if (videoIndex >= vidArray.length - 1) {
  //     setVideoIndex(0);
  //   } else {
  //     setVideoIndex(videoIndex + 1)
  //   }
  // }


  return (
    <>
      <div className="container">
        <audio src='./Assets/songs/mahadev.mp3' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
        <video src={vidArray[videoIndex]} loop muted autoPlay className='backgroundVideo'></video>
        <div className="blackScreen"></div>
        <div className="music-Container">
          <p className='musicPlayer'>Music Player</p>
          <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
          <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
          <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar' />
          <div className="musicTimerDiv">
            <p className='musicCurrentTime'>{musicCurrentTime}</p>
            <p className='musicTotalLenght'>{musicTotalLength}</p>
          </div>
          <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
          <div className="musicControlers">
            <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
        {/* <div className="changeBackBtn" onClick={handleChangeBackground}>
          Change Background
        </div> */}

      </div>
    </>
  );
}

export default App;