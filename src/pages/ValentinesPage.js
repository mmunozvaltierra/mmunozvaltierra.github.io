import cat1 from '../images/flowerCat1.jpg'
import cat2 from '../images/flowerCat2.jpg'

export const ValentinesPage = () => {
    return (
        <div style={{textAlign: 'center', fontFamily: 'Hearts'}}>
            <h1>Will you be my valentine??? </h1>
            <img src={cat1} style={{maxHeight: '300px'}} />
            <img src={cat2} style={{maxHeight: '300px'}} />
            <br />
            <button>
            </button>
            <button>
            </button>
        </div>
    );
}