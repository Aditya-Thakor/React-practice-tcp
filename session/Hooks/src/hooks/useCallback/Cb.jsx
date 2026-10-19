

const Cb = () => {


const handleClick = () => {
console.log("Clicked");
}
 
    return <Child onClick={handleClick} />;
}
export default Cb;