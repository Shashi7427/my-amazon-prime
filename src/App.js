import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import MovieScreen from './screens/moviescreen/MovieScreen';
import MovieBanner from './components/moviebanner/MovieBanner';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/navbar/Navbar';
function App() {
  const [userDetails, setUserDetails] = useState({
    uname: 'Loading..',
    dp: 'https://www.nicepng.com/png/full/120-1201448_search-radio-icon-png-blue.png',
    wathlist: [],
    blocklist: [],
    umail: '',
    uid: '',
    paymentValidity: ''
  })

  const changeUserDetails = (obj) => setUserDetails(obj)


  const [selectedRow, setSelectedRow] = useState()
  const changeSelectedRow = (row) => setSelectedRow(row)

  const [muteState, setMuteAudio] = useState(1);
  const changeMuteState = (status) => setMuteAudio(status)

  const [selectedComponent, setSelectedComponent] = useState();
  const changeSelectedComponent = (id) => { setSelectedComponent(id) }

  const [activeScreen, setActiveScreen] = useState()
  const changeScreen = (screen) => setActiveScreen(screen)

  const [originalLanguage, setOriginalLanguage] = useState('en')
  const changeLanguage = (lan) => { setOriginalLanguage(lan); changeUpdateScreen(); }

  const [videoPlayerScreen, setVideoPlayerScreen] = useState(false)
  const changeVideoScreen = (status) => setVideoPlayerScreen(status)

  const [mediaType, setMediaType] = useState('movie')
  const changeMediaType = (type) => { setMediaType(type); }

  const [updateScreen, setUpdateScreen] = useState(0)
  const changeUpdateScreen = () => { setUpdateScreen(updateScreen + 1) }

  const [kidMode, setKidmode] = useState(false)
  const changeToKidMode = (status) => setKidmode(status)

  const [userUpdate, setUserUpdate] = useState(0)
  const updateUser = () => setUserUpdate(userUpdate + 1)


  const [screenWidth, setScreenWidth] = useState(0);

  return (
    <div className="app">
      <Navbar activeScreen={activeScreen} changeScreen={changeScreen} changeMediaType={changeMediaType} changeLanguage={changeLanguage} changeUpdateScreen={changeUpdateScreen} changeToKidMode={changeToKidMode} userUpdate={userUpdate} userDetails={userDetails} changeUserDetails={changeUserDetails} />
        <ToastContainer
          position="top-left"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      <MovieScreen
          updateScreen={updateScreen}
          mediaType={mediaType}
          originalLanguage={originalLanguage}
          changeScreen={changeScreen}
          selectedRow={selectedRow}
          muteState={muteState}
          selectedComponent={selectedComponent}
          changeMuteState={changeMuteState}
          changeSelectedComponent={changeSelectedComponent}
          changeSelectedRow={changeSelectedRow}
          kidMode={kidMode}
          userDetails={userDetails}
        />
    </div>
  );
}

export default App;
