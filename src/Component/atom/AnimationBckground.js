import React, { useEffect } from "react";
import "./backgrndAni.css";

function AnimationBckground() {
    useEffect(() => {
        console.log("BackgrndAni loaded");
    }, []);

    return (
        <div className="background">
            {Array(20).fill().map((_, i) => (
                <span key={i}></span> // Using array map for cleaner code
            ))}
        </div>
    );
}

export default AnimationBckground;
