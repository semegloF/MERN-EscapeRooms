import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {Link} from 'react-router-dom';
import Background from '../Liste/back.jpg';

function Cardsprison() {
  return (
    <div className='cards'style={{
      background: `url(${Background})`,
    }}>
      
      <h1>Nos category disponible</h1><br/>
      <h3>  <Link to="/Category"><button type="button">Retourner vers les categories </button> </Link>  ⚔️  <Link to="/ajoutcomment"><button type="button">Poster votre commentaire 📜</button> </Link></h3>
        <div className='cards__wrapper'>
       
          <ul className='cards__items'>
            <CardItem
              src='images/alc.jpg'
              text='L île d Alcatraz est une île en Californie. Elle fut nommée ainsi par les Espagnols car elle servait de refuge à de nombreux pélicans.'
              label='ALCATRAZ 499$/H (2-10 Personnes)'
              // path='/tofill'
              />
            <CardItem
              src='images/chateaux.jpg'
              text='Le château d If est une forteresse française édifiée sur les ordres du roi François Iᵉʳ, sur l îlot d If de l archipel du Frioul.'
              label='CHATEAUX ISLAND 299$/H (2-10 Personnes)'/>
            <CardItem
              src='images/devilis.jpg'
              text='L île du Diable est l une des trois îles du Salut en Guyane, il y installe des colons survivants des épidémies.'
              label='DEVILS ISLAND 99$/H (2-10 Personnes)'/>
            </ul>
              <ul className='cards__items'>
              <CardItem
              src='images/oka.jpg'
              text='Oukacha est trop évasée et exposée par suite à l assaut des vents violents et des lames qui déferlent jusqu à terre.'
              label='OUKACHA 159$/H (2-10 Personnes)'/>
              <CardItem
              src='images/teccart.jpg'
              text="J'aimerai terminer et trouver un travail le plus tôt possible."
              label='TECCART 5600$/SESSION (1 Personne)'/>
              <CardItem
              src='images/taz.jpg'
              text='Tazmamert était une prison secrète pour les prisonniers politiques à l est du Maroc dans l Atlas.'
              label='TAZMAMART 699$/H (2-10 Personnes)'/>

          </ul>
        </div>
      </div>
  );
}

export default Cardsprison;