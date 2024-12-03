function Button2() {
    const handleClick = () => console.log("Button 2 clicked.");

    const handleClick2 = (name) => console.log(`${name}  Button 3 clicked why???`);
    const handleClick3 = (name) => console.log(`${name}  Button 3-1 clicked.`);

    let count = 0;
    const handleClick4 = (name) => {
        if(count < 3) {
            count += 1;
            console.log(`${name} clicked ${count} times.`);
        } else {
            console.log(`${name} please stop click.!`);
        }
    }

    const handleClick5 = (e) => console.log(e);
    const handleClick6 = (e) => e.target.textContent = "change button text";

    const imgUrl = "./src/assets/react.svg";
    const handleClick7 = (e) => e.target.style.display = "none";

    return (
        <>
            <button onClick={handleClick}>Button 2</button><br></br>

            <button onClick={handleClick2("james")}>Button 3</button><br></br>
            <button onClick={() => handleClick3("james")}>Button 3-1</button><br></br>

            <button onClick={() => handleClick4("james")}>Button 4</button><br></br>

            <button onClick={handleClick5}>Button 5</button><br></br>
            <button onClick={handleClick6}>Button 6</button><br></br>

            <img src={imgUrl} onClick={(e) => handleClick7(e)} /> click image
        </>
    )

}

export default Button2