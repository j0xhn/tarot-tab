import React from "react";
import staticCards from '../static/cards'
import {Description} from '../components'
import { getRandomNumber } from '../utils'

import Card from "./card";

const imageUrl = `https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-06.jpg`;

const JD = () => {
  // idesc: "A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change "unto the Ogdoad." The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ."
  // meaning_rev: "Physician, Magus, mental disease, disgrace, disquiet."
  // meaning_up: "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male."
  // name: "The Magician"
  // name_short: "ar01"
  // type: "major"
  // value: "1"
  const cards = staticCards.map(({value_int, suit, value, name, type}) => {
    const imageUrl = type === 'major' 
      ? `https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-${value}-${name.replace(/\s+/g, '-')}.jpg`
      : `https://www.biddytarot.com/wp-content/uploads/2018/06/ET-
          ${suit.toUpperCase()}-
          ${value_int < 10 
            ? '0'+value_int
            : value_int
          }.jpg` 
    return {
      ...card,
      imageUrl: imageUrl.replace(/(\r\n|\n|\r)/gm,"").replace(/\s/g,'')
    }
  })

  const card = cards[getRandomNumber()]
  // const direction = getRandomNumber({customKey = 'direction'}) 
  console.log('card.imageUrl', card.imageUrl, card)
  return (
    <div className="Aligner column">
      <div className="Aligner">
        <Card img={card.imageUrl} />
        <Description>{card.idesc}</Description>
      </div>
    </div>
  );
};

export default JD;
