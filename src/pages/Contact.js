import "../style/Contact.scss"
import hedvig from '../assets/hedvig.png'
import letter from '../assets/letter.png'

export default function Contact(props) {
    return (
        <div className='contact'>
            <div className="contact-left">
                <img src={hedvig}/>

            </div>
            <div className="contact-right">
                
                <h2>Kapcsolatfelvétel</h2>
                <form action="" method="post">
                    <label>Teljes név</label>
                    <input type="text" placeholder="Adja meg a nevét" autoComplete="off" />

                    <label>Email</label>
                    <input type="email" placeholder="Adja meg az email címét" autoComplete="off" />

                    <label>Telefonszám</label>
                    <input type="text" placeholder="Adja meg a telefonszámát" autoComplete="off" />

                    <label>Miben segíthetünk?</label>
                    <textarea rows={6} placeholder="Üzenet..."></textarea>

                    <button>Küldés</button>
                </form>
                
            </div>
        </div>
    )
}