import card1Image from "../assets/card1.png";
import card2Image from "../assets/card2.png";
import card3Image from "../assets/card3.png";
import TiltImage from "../components/TiltImage.jsx"

export default function PageTwo() {
    return (
    <>
        <h1> Page 2</h1>
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <TiltImage src={card1Image} alt="Image" style={{ width: '300px', height: 'auto' }}/>
        <TiltImage src={card2Image} alt="Image" style={{ width: '300px', height: 'auto' }}/>
        <TiltImage src={card3Image} alt="Image" style={{ width: '300px', height: 'auto' }}/>
        </div>
        </>
    );
}