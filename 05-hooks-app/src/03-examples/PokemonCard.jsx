const PokemonCard = ({ id, name, sprites = [] }) => {
	return <div style={{ height: 200 }}>
    <h2 className="text-capitalize">#{id}: {name}</h2>

    <div>
      {sprites.map(s => <img src={s} key={s} alt={name}/>)}
    </div>
  </div>
}

export default PokemonCard
