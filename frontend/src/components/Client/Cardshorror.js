import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Background from '../Liste/back.jpg';
import {Link} from 'react-router-dom';

function Cardshorror() {
  return (
    <div className='cards' style={{
      background: `url(${Background})`,
    }}>
      
      <h1>Nos category disponible</h1><br/>
      <h3>  <Link to="/Category"><button type="button">Retourner vers les categories </button> </Link>  ⚔️  <Link to="/ajoutcomment"><button type="button">Poster votre commentaire 📜</button> </Link></h3>
        <div className='cards__wrapper'>
       
          <ul className='cards__items'>
            <CardItem
              src='images/horror1.png'
              text='Le Screaming Tunnel est un petit tunnel de calcaire, passant sous ce qui était autrefois une ligne de chemin de fer du Grand Tronc.'
              label='TUNNEL HURLANT 59$/H (2-5 Personnes)'
                 // path='/tofill'
              />
            <CardItem
              src='images/horror2.jpg'
              text='Des choses très bizarres se sont produites ici, surveillez vos arrières.'
              label='ACTIVITÉ PARANORMALE 49$/H (2-3 Personnes)'/>
            <CardItem
              src='images/horror3.jpg'
              text='Vous avez 1h pour terminer une série de défis pour échapper la massacre.'
              label='EVITER LA MASSACRE 59$/H (2-5 Personnes)'/>
            </ul>
              <ul className='cards__items'>
              <CardItem
              src='images/horror4.jpg'
              text="Ils sont morts, c'est la seule chose que nous pouvons garantir."
              label='LA MORGUE 49$/H (2-5 Personnes)'/>
              <CardItem
              src='images/horror5.jpeg'
              text='Les personnes en forme trouveront-elles ce défi facile ?'
              label='BÂTIMENT ABANDONNÉ 69$/H (2-5 Personnes)'/>
              <CardItem
              src='images/horror6.jpg'
              text="N'ayez pas peur de regarder dans le noir."
              label='POISON 49$/H (2-5 Personnes)'/>

          </ul>
        </div>
      </div>
  );
}

export default Cardshorror;