import rehraas from './rehraas.json'
import japji from './japji.json'
import jaap from './jaap.json'
import chaupai from './chaupai.json'
import tavPrasad from './tav-prasad.json'
import sohila from './sohila.json'
const data = [
  {
    title: 'Morning Prayer', 
    data : [
      {name : 'Japji Sahib', id : 2, data : japji},
      {name : 'Jaap Sahib', id : 3, data : jaap},
      {name : 'Tav-Prasad Savaiye', id : 5, data : tavPrasad},
      {name : 'Chaupai Sahib', id : 4, data : chaupai}
    ]
  },
  {
    title: 'Evening Prayer', 
    data : [
      {name : 'Rehras Sahib', id : 1, data : rehraas}
    ]
  },
  {
    title: 'Night Prayer', 
    data : [
      {name : 'Sohila Sahib', id : 6, data : sohila}
    ]
  }
]
  export default data