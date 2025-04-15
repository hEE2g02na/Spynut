import React, { useEffect } from 'react';
import '../styles/HomePage.css';

function HomePage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'node_modules/rickroll.js/RickRoll.js';
        script.async = true;
        script.onload = () => {
            if (typeof rickroll === 'function') {
                rickroll();
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="home">
            <section className="intro">
                <h1>Revolutionizing Package Tracking</h1>
                <p>At SpyNut, we have created a groundbreaking concept product - a styrofoam packaging peanut with embedded technology to track packages with unparalleled accuracy.</p>
                <button>Explore Now</button>
            </section>
            <section className="features">
                <h2>Unveiling the Cutting-Edge</h2>
                <p>Prepare to be amazed as you delve into the inner workings of our revolutionary styrofoam peanut. From cutting-edge sensors to seamless connectivity.</p>
                <button>Learn More</button>
            </section>
        </div>
    );
}

export default HomePage;
