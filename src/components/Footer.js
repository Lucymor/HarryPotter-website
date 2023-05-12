import '../style/Footer.scss'
import 'boxicons'
import {SocialMedia} from './Items'
export default function Footer() {


    return (
        <div className="footer">
            <div className='socialMedia'>
                {SocialMedia.map(element => (
                    <span key={element.name} style={{ cursor: 'pointer' }}
                        onClick={() => window.location.href = element.href}>
                        <box-icon type='logo' name={element.icon} color='white' size='md' animation='burst-hover'></box-icon>
                    </span>
                ))}
            </div>
            <p>&copy; 2023 HarryPotterFan website </p>
        </div>
    )
}