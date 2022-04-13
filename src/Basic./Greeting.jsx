import React from 'react';

const Greeting = () => {

    // getting time
    let mytime = new Date().getHours();
    // An empty string for data
    let greeting = "";
    // inline css
    const css = { };
    //another css for background change
    const Bgcss = { };

    // if , else if , else condition
    if (mytime >= 5 && mytime < 12) {
        greeting = "Good Morning";
        css.color = "orange";
        Bgcss.backgroundImage = "url('https://wallpapercave.com/wp/V4F9sCQ.jpg')";
    } else if (mytime >=12 && mytime < 17){
        greeting = "Good Afternoon"
        css.color = "red";
        Bgcss.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/02/10/15/49/sky-1191949_1280.jpg')"
    } else if (mytime >= 17 && mytime < 20) {
        greeting = "Good Evening";
        css.color = "green";
        Bgcss.backgroundImage = "url('https://wallpaperaccess.com/full/3695752.jpg')"
    } else {
        greeting = "Good Night !";
        css.color = "grey";
        Bgcss.backgroundImage = "url('https://images.hdqwalls.com/download/anime-night-scenery-8r-1920x1080.jpg')"
    }
    return (
        <>
        <div style={Bgcss} className="Main">
        <div className="Greeting">
        <h1>Hello Sir, <span style={css}>{greeting}</span></h1>
        </div>
        </div>
        </>
    )
}

export default Greeting