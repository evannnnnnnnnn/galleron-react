import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Arcticle from './Article';

const Blog = () => {

    const [pseudo, setPseudo] = useState('');
    const [message, setMessage] = useState('');
    const [datajson, setDatajson] = useState([]);
    const [messageOk, setMessageOk] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:3004/articles").then((res) => setDatajson(res.data));
    }, []);


    const ajoujter_article = (e) => {
        e.preventDefault();
        if (messageOk) {
            axios.post("http://localhost:3004/articles", { author: pseudo, content: message }).then(function () {
                axios.get("http://localhost:3004/articles").then((res) => setDatajson(res.data));
            });
        } else {
            console.log('non trop petit');
        }

    }

    return (
        <div id="blog">
            <form onSubmit={(e) => ajoujter_article(e)}>

                <input type="text" placeholder='pseudo' onChange={(e) => setPseudo(e.target.value)} />
                <textarea placeholder='votre message' onChange={(e) => { setMessage(e.target.value); if (e.target.value.length >= 100) { setMessageOk(true) } else { setMessageOk(false) } }} />
                <button type='submit'>envoyer</button>
            </form>
            <div id="all_review">
                {datajson.map((elem) =>

                    <Arcticle pseudo={elem.author} message={elem.content} _id={elem.id} />
                )}
            </div>
        </div>
    );
};

export default Blog;