import Carousel from "../components/Carousel"
import "../style/Home.scss"

export default function Home() {
    return (
        <div className="home">
            <Carousel />
            <div className="welcome">
                <h1>Üdvözöllek a Harry PotterFan weblapon!</h1>
                <p> Téged is érdekel a varázslók világa? Akkor itt a helyed! </p>

            </div>
            
        </div>
    )
}