import React from 'react';
import axios from 'axios';


const Arcticle = ({ pseudo, message, _id }) => {

    const supprimer_article = (e) => {
        e.preventDefault();


        axios.delete("http://localhost:3004/articles/" + _id);

    }

    return (
        <div class="art_review">
            <b>{pseudo}</b>
            <p>{message}</p>

            <form onSubmit={(e) => supprimer_article(e)}>
                <button >modifier</button>
                <button type='submit'>supprimer</button>
            </form>
        </div>

    );
};



export default Arcticle;