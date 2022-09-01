import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

function Home(props) {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetchHeroes();
        // eslint-disable-next-line
    }, []);

    const fetchHeroes = async () => {
        const heroes = await fetch("http://localhost:5000/heroes/");
        const response = await heroes.json();
        console.log(response);
        setHeroes(response);
    };

    return (
        <main className="container text-center">
            <Link to={"/add"}>
                <button type="button" className="btn btn-warning my-3">
                    Add Hero
                </button>
            </Link>
            <article className="row mb-5">
                {heroes.map((hero) => {
                    return <Cards key={hero.slug} hero={hero} />;
                })}
            </article>
        </main>
    );
}

export default Home;
