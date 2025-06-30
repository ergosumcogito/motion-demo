import catImage from '../assets/cat.jpg'

export default function PageOne() {
    return (
    <>
    <h1>Page 1</h1>
        <img src={catImage} alt="Image" style={{ width: '300px', height: 'auto' }}/>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum."</p>
    </>
        );
}