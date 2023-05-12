export default function CharactersDatas({ actor }) {

    return (
        <div className="actor">
            <div style={{ backgroundImage: `url(${actor.image})` }}></div>
            {/* <img src={actor.image} /> */}
            <h3>{actor.name}</h3>
            <p>Színész: {actor.actor}</p>
            <p> {actor.text}</p>
        </div>

    )
}