import React from 'react';
import './Home.css';
import { Button } from '../Button/Button';

function Home() {
  return (
    <div className='hero-container'>
      <video src='/videos/video1.mp4' autoPlay loop muted />
      <h1>Déchiffrer 🗝e C🔒de...</h1>
      <p>⏳ Pensez-vous pouvoir sortir ?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
          S'inscrire
        </Button>
      
      </div>
    </div>
  );
}

export default Home;