import React from 'react';

const Greeting = () => {

    // getting time
    let mytime = new Date().getHours();
    // An empty string for data
    let greeting = "";
    // inline css
    const css = { };

    // if , else if , else condition
    if (mytime >= 5 && mytime < 12) {
        greeting = "Good Morning";
        css.color = "orange";
    } else if (mytime >=12 && mytime < 17){
        greeting = "Good Afternoon"
        css.color = "red";
    } else if (mytime >= 17 && mytime < 20) {
        greeting = "Good Evening"
    } else {
        greeting = "Good Night !";
        css.color = "grey";
    }
    return (
        <>
        <div className="Greeting">
        <h1>Hello Sir, <span style={css}>{greeting}</span></h1>
        </div>
        </>
    )
}

export default Greeting