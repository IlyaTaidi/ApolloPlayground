import React from 'react';
import Particles from "react-tsparticles";

const Stars = () =>
    <Particles
        id="tsparticles"
        options={{
            fpsLimit: 60,
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 30,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "out",
                    random: true,
                    speed: 0.2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 600,
                    },
                    value: 60,
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    random: false,
                    value: 1,
                },
            },
        }}
    />

export default Stars