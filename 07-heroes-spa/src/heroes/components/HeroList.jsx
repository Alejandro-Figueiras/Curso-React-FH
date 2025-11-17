import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'

const HeroList = ({publisher}) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <div className='row row-cols-1 row-cols-md-3 g-3 '>
      {heroes.map(h => <HeroCard key={h.id} hero={h} />)}
    </div>
  )
}

export default HeroList