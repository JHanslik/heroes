import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Hero(props) {
    const params = useParams();
    const [hero, setHero] = useState([]);
    const { name, power, color, age, isAlive, image } = hero;

    useEffect(() => {
        fetchHero();
        // eslint-disable-next-line
    }, []);

    const fetchHero = async () => {
        const hero = await fetch(`http://localhost:5000/heroes/${params.slug}`);
        const response = await hero.json();
        setHero(response);
    };
    console.log(power);
    return (
        <main
            className="container d-flex flex-column justify-content-center"
            onLoad={window.scroll(0, 0)}
        >
            <section
                style={{ "max-width": "500px" }}
                className="bg-warning text-center mx-auto mb-5"
            >
                <img src={image} alt={name} className="w-100" />
                <h2>{name}</h2>
                <p>Power : {power?.join(", ")}</p>
                <p>Color : {color}</p>
                <p>Age : {age}</p>
            </section>
        </main>
    );
}

export default Hero;
