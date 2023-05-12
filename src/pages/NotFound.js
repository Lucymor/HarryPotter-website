import {Link} from 'react-router-dom'
import "../style/NotFound.scss"

export default function NotFound(props) {
    return (
        <div className="notfound">
            <h2>A keresett oldal nem található</h2>
            <Link to="/">Vissza a kezdőlapra</Link>
        </div>
    )
}