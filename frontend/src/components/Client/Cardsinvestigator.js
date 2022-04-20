import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {Link} from 'react-router-dom';
import Background from '../Liste/back.jpg';

function Cardsinvestigator() {
  return (
    <div className='cards'style={{
      background: `url(${Background})`,
    }}>
      
      <h1>Nos category disponible</h1><br/>
      <h3>  <Link to="/Category"><button type="button">Retourner vers les categories </button> </Link>  ⚔️  <Link to="/ajoutcomment"><button type="button">Poster votre commentaire 📜</button> </Link></h3>
        <div className='cards__wrapper'>
       
          <ul className='cards__items'>
            <CardItem
              src='images/inv1.jpg'
              text='Une autre victime ? pfff...journée ennuyeuse au bureau.'
              label='FBI (2-4 Personnes)'
                 // path='/tofill'
                 />
            <CardItem
              src='images/inv2.png'
              text="Assurez-vous d'avoir une bonne mémoire avant d'accpeter cette enquête."
              label='UN MYSTÈRE (2-6 Personnes)'/>
            <CardItem
              src='images/inv3.jpg'
              text='Le travail d’équipe, une bonne communication, de l’ingéniosité, de la créativité, de la logique et un bon sens de l’observation seront très important.'
              label='LE CHIFFRE 0 (2-7 Personnes)'/>
            </ul>
              <ul className='cards__items'>
              <CardItem
              src='images/inv4.jpeg'
              text="Le tueur s'est enfui, votre travail est de le ramener."
              label='MEURTRE (2-5 Personnes)'/>
              <CardItem
              src='images/inv5.jpg'
              text="Tout le monde agit normalement mais au fond, quelque chose ne va pas."
              label='ENQUÊTE SALLE DE JEUX (2-5 Personnes)'/>
              <CardItem
              src='images/inv6.jpg'
              text="A criminal stole a very important key."
              label='DISPARITION (2-4 Personnes)'/>

          </ul>
        </div>
      </div>
  );
}

export default Cardsinvestigator;