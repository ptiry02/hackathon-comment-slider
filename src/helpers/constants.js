import me from '../assets/images/_MG_9829.jpeg'
import johnDoe from '../assets/images/john-doe.png'
import sherlock from '../assets/images/sherlock-holmes.jpeg'
import spain from '../assets/icons/icons8-spain-48.png'
import france from '../assets/icons/icons8-france-48.png'
import gb from '../assets/icons/icons8-great-britain-48.png'

/* This is info to be displayed in the comment card. In real life it would come from backend */

export const CardsInfo = [
  {
    name: 'Paul Tiry',
    picture: me,
    flag: france,
    comment:
      "This Hackathon idea is great! I'm having lots of fun. I hope I can find my dream job as junior frontend developer with this.",
  },
  {
    name: 'Jhon Doe',
    picture: johnDoe,
    flag: spain,
    comment:
      'Me pareció excelente, creo que el Discord está muy bien organizado y la iniciativa de NUWE es tremenda, gracias por la oportunidad, realmente lo disfruté.',
  },
  {
    name: 'Sherlock Holmes',
    picture: sherlock,
    flag: gb,
    comment: 'When you have eliminated the impossible, whatever remains, however improbable, must be the truth!',
  },
]
