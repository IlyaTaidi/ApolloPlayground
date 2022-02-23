import React from 'react';
import Particles from "react-tsparticles";

const Stars = () =>
    <Particles
        id="tsparticles"
        options={{
            fpsLimit: 60,
            particles: {
                color: {
                    value: "#b1d7fd",
                },
                links: {
                    color: "#ffffff",
                    distance: 50,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "out",
                    random: true,
                    speed: 0.1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 900,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.1,
                },
                twinkle: {
                    lines: {
                        enable: true,
                        frequency: 100,
                        opacity: .5
                    },
                    particles: {
                        enable: true,
                        frequency: 100,
                        opacity: .5
                    }
                },
                size: {
                    random: true,
                    value: 2.5,
                },
            },
        }}
    />
export default Stars