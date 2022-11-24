import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Arcticle from '../Arcticle';

const Blog = () => {

    const [pseudo, setPseudo] = useState('');
    const [message, setMessage] = useState('');
    const [datajson, setDatajson] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3004/articles").then((res) => setDatajson(res.data));
    }, []);


    const ajoujter_article = (e) => {
        e.preventDefault();

        console.log(message);

    }

    return (
        <div id="blog">
            <form onSubmit={(e) => ajoujter_article(e)}>

                <input type="text" placeholder='pseudo' onChange={(e) => setPseudo(e.target.value)} />
                <textarea placeholder='votre message' onChange={(e) => setMessage(e.target.value)} />
                <button type='submit'>envoyer</button>
            </form>
            <div id="all_review">
                {datajson.map((elem) =>

                    <Arcticle pseudo={elem.author} message={elem.content} />
                )}
            </div>
        </div>
    );
};

export default Blog;