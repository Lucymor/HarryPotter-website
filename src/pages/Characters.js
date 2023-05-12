import { Actors } from "../components/Items"
import CharactersDatas from "./CharactersDatas"
import "../style/Characters.scss"

export default function Characters() {
    return (
        <div className="characters">
            <div className="title">Szereplők</div>
            <div className="cards">
                {Actors.map(actor =>
                    <CharactersDatas key={actor.name} actor={actor} />
                )}
            </div>
        </div>
    )
}