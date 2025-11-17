import { Navigate, useNavigate, useParams } from "react-router"
import { getHeroById } from "../helpers/getHeroById"
import { useMemo } from "react"

const HeroPage = () => {
  const { heroId } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(heroId), [heroId])

  const handleNavigateBack = () => {
    navigate(-1)
  }

  if (!hero) {
    return <><Navigate to={`/marvel`}/></>
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/heroes/${hero.id}.jpg`} alt="Imagen del superhéroe" className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group" style={{listStyle: "none"}}>
          <li><b>Alter ego:</b> {hero.alter_ego}</li>
          <li><b>Publisher:</b> {hero.publisher}</li>
          <li><b>First Appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters:</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={handleNavigateBack}>Navigate Back</button>
      </div>
    </div>
  )
}

export default HeroPage