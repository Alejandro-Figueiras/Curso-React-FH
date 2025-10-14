import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

const HeroList = ({publisher}) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <ul>
      {heroes.map(h => <li key={h.id}>{h.superhero}</li>)}
    </ul>
  )
}

export default HeroList