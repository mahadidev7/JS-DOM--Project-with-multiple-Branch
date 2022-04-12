
window.onload = () =>{
    main()
}

// main function 
function main(){
    const root = document.querySelector('.root')
    const changeBtn = document.querySelector('.change-btn')

    changeBtn.addEventListener("click", function(){
        const Result = generateRGBColor()
        root.style.backgroundColor = Result;
    })
}

// rgb color create
function generateRGBColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return ` rgb(${red}, ${green}, ${blue}) `
}




