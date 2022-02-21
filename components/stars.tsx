import React from 'react';
import Particles from "react-tsparticles";

const Stars = () =>
    <Particles
        id="tsparticles"
        options={{
            background: {
                color: {
                    value: "#000000",
                },
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
            },
            particles: {
                color: {
                    value: "#fdfbb1",
                },
                links: {
                    color: "#ffffff",
                    distance: 20,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "out",
                    random: true,
                    speed: 0.08,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 900,
                    },
                    value: 600,
                },
                opacity: {
                    value: 0.1,
                },
                shape: {
                    type: "circle",
                },
                twinkle: {
                    "lines": {
                    "enable": true,
                    "frequency": 100,
                    "opacity": .5
                                },
                    "particles": {
                    "enable": true,
                    "frequency": 100,
                    "opacity": .5
                                }
                },
                size: {
                    random: true,
                    value: 2.5,
                },
            },
            detectRetina: true,
        }}
    />

export default Stars