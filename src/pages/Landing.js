import { Link } from 'react-router-dom';
import logo from '../images/happy-cat.gif';
import heart from '../images/heart-icon.png';

export const Landing = () => {
    return (
        <div style={{textAlign: 'center', fontFamily:"Hearts"}}>
            <img style={{width: '25%'}} src={logo} />
            <h1>Happy 6 Months! I love you!</h1>
            <Link to="/lovemeplease">
                <button>
                    <img src={heart} />
                    <br/>
                    ILY2
                </button>
            </Link>
        </div>
    );
}