import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Background from '../Liste/back.jpg';
import {Link} from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'   style={{
      background: `url(${Background})`,
    }}>
      
      <h1>Nos catégories disponibles</h1><br/>

     <h3>  <Link to="/ajoutcomment"><button type="button">Poster votre commentaire 📜</button> </Link></h3>

    
        <div className='cards__wrapper'>    
         
          <ul className='cards__items'>
        
 <CardItem src='images/horror.png' text='Face à la mort celui qui méritera de vivre et celui qui vivra sont deux choses bien différentes.' label='HORREUR' path='/Horror'/>
 <CardItem src='images/inves.png' text="Dans l'algèbre comme dans la police, il faut identifier X." label='ENQUÊTEUR' path='/Investigator'/>
 <CardItem src='images/prison.png' text="Mais surtout, il y avait à attendre... En prison, on n'en finit jamais d'attendre." label='PRISON' path='/Prisons'/>

            </ul>
        </div>
      </div>
  );
}

export default Cards;