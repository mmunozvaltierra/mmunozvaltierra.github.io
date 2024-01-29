import { Link } from 'react-router-dom';
import cat1 from '../images/flowerCat1.jpg'
import cat2 from '../images/flowerCat2.jpg'

export const ValentinesPage = () => {
    return (
        <div style={{textAlign: 'center', fontFamily: 'Hearts'}}>
            <h1>Will you be my valentine??? </h1>

            <img src={cat1} style={{maxHeight: '300px'}} />
            <img src={cat2} style={{maxHeight: '300px'}} />

            <br />

            <Link to="/yesyesyes">
                <button style={{margin: '10px'}}>
                    Yes!!!
                </button>
            </Link>

            <Link to="/doYouMeanIt?">
            <button style={{margin: '10px'}}>
                No I hate you. Die.
            </button>
            </Link>
        </div>
    );
}