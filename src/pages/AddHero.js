import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddHero(props) {
    const navigate = useNavigate();
    const [slug, setSlug] = useState("");
    const [name, setName] = useState("");
    const [power, setPower] = useState([]);
    const [age, setAge] = useState("");
    const [color, setColor] = useState("");
    const [isAlive, setIsAlive] = useState(false);
    const [image, setImage] = useState("");

    const handleSlugChange = (e) => {
        setSlug(e.target.value);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };
    const handleColorChange = (e) => {
        setColor(e.target.value);
    };
    const handleIsAliveChange = (e) => {
        setIsAlive(e.target.checked);
    };
    const handleImageChange = (e) => {
        setImage(e.target.value);
    };
    const handlePowerChange = (e) => {
        if (e.target.value.length > 1) {
            const clonedPower = [...power];
            const powerExisting = clonedPower.find(
                (pow) => pow === e.target.value
            );
            if (!powerExisting) {
                clonedPower.push(e.target.value);
                setPower(clonedPower);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const hero = {
            slug: slug,
            name: name,
            power: power,
            color: color,
            age: age,
            isAlive: isAlive,
            image: image,
        };

        const request = await fetch(process.env.REACT_APP_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(hero),
        });

        const response = await request.json();

        if (request.status === 201) {
            navigate("../");
        } else {
            console.log(response);
        }
    };

    return (
        <main className="container mb-5">
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="bg-dark text-light d-flex flex-column my-3 col-10 col-lg-6 mx-auto">
                    <label className="py-2" htmlFor="heroSlug">
                        Hero's Slug
                    </label>
                    <input
                        type="text"
                        id="heroSlug"
                        placeholder="ex: 'iron-man', 'thor', 'captain-america', ..."
                        onChange={handleSlugChange}
                        required
                    />
                </div>
                <div className="bg-dark text-light d-flex flex-column my-3 col-10 col-lg-6 mx-auto">
                    <label className="py-2" htmlFor="heroName">
                        Hero's Name
                    </label>
                    <input
                        type="text"
                        id="heroName"
                        placeholder="ex: 'Iron man', 'Thor', 'Captain America', ..."
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="bg-dark text-light d-flex flex-column my-3 col-10 col-lg-6 mx-auto">
                    <label className="py-2" htmlFor="heroPower1">
                        Hero's Powers
                    </label>
                    <input
                        type="text"
                        id="heroPower1"
                        placeholder="ex: 'Super strength', 'Super intelligence', 'Money', ..."
                        onBlur={handlePowerChange}
                        required
                    />
                    <input
                        type="text"
                        id="heroPower2"
                        placeholder="ex: 'Super strength', 'Super intelligence', 'Money', ..."
                        onBlur={handlePowerChange}
                    />
                    <input
                        type="text"
                        id="heroPower3"
                        placeholder="ex: 'Super strength', 'Super intelligence', 'Money', ..."
                        onBlur={handlePowerChange}
                    />
                </div>
                <div className="bg-dark text-light d-flex flex-column my-3 col-10 col-lg-6 mx-auto">
                    <label className="py-2" htmlFor="heroAge">
                        Hero's Age
                    </label>
                    <input
                        type="text"
                        id="heroAge"
                        placeholder="ex: '23', '45', '15', ..."
                        onChange={handleAgeChange}
                        required
                    />
                </div>
                <div className="bg-dark text-light d-flex flex-column my-3 col-10 col-lg-6 mx-auto">
                    <label className="py-2" htmlFor="heroColor">
                        Hero's Color
                    </label>
                    <input
                        type="text"
                        id="heroColor"
                        placeholder="ex: 'Blue', 'Yellow', 'Gold', ..."
                        onChange={handleColorChange}
                        required
                    />
                </div>
                <div className="bg-dark text-light d-flex flex-column my-3 col-10 col-lg-6 mx-auto">
                    <label className="py-2" htmlFor="heroImage">
                        Hero's Image
                    </label>
                    <input
                        type="text"
                        id="heroImage"
                        placeholder="Please add link to comic's cover"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <div className="bg-dark text-light my-3 col-10 col-lg-6 mx-auto">
                    <label className="py-2 mx-3" htmlFor="heroStatus">
                        Is the hero alive ? Click if yes :
                    </label>
                    <input type="checkbox" onChange={handleIsAliveChange} />
                </div>
                <button type="submit" className="btn btn-warning">
                    Deploy hero !
                </button>
            </form>
        </main>
    );
}

export default AddHero;
