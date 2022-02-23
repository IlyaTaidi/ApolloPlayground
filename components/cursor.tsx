import React from "react";
import AnimatedCursor from "react-animated-cursor"


const Cursor = () =>
    <div className="App">
        <AnimatedCursor
            innerSize={8}
            outerSize={19}
            color='193, 11, 111'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={1.6}
        />
    </div>

export default Cursor