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
                    value: "#ffffff",
                },
                links: {
                    enable: false,
                },
                collisions: {
                    enable: true,
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
                shape: {
                    type: "circle",
                },
                size: {
                    random: false,
                    value: 1,
                },
            },
            detectRetina: true,
        }}
    />

export default Stars