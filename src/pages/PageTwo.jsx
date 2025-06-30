import catImage from "../assets/cat2.jpg";

export default function PageTwo() {
    return (
    <>
        <h1> Page 2</h1>
        <img src={catImage} alt="Image" style={{ width: '300px', height: 'auto' }}/>
    </>
    );
}