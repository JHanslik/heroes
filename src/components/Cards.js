import { Link } from "react-router-dom";

function Cards({ hero }) {
    const { slug, name, power, color, isAlive, age, image } = hero;
    return (
        <div
            className="card p-2 col-10 col-md-6 col-lg-5 mx-auto my-3 bg-warning"
            style={{ width: "18rem" }}
        >
            <Link to={`/${slug}`}>
                <img className="card-img-top" src={image} alt={`${name}`} />
                <div className="card-body">
                    <h5 className="card-title  text-center">{name}</h5>
                    <p className="card-text  text-center">age : {age}</p>
                    <p className="card-text  text-center">color : {color}</p>
                    <ul className="card-text text-center bg-warning p-0">
                        Powers :
                        {power.map((power) => {
                            return <li key={power}>{power}</li>;
                        })}
                    </ul>
                    <p className="card-text">{isAlive}</p>
                </div>
            </Link>
        </div>
    );
}

export default Cards;
