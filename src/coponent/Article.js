import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Arcticle = ({ pseudo, _message, _id, _date, callback }) => {

    const [edit_message, setEdit_message] = useState(false);
    const [message, setMessage] = useState(_message);
    const [messageOk, setMessageOk] = useState(true);



    const supprimer_article = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:3004/articles/" + _id).then(() => { callback() });
    }

    const modifier_article = () => {
        if (messageOk) {
            axios.put("http://localhost:3004/articles/" + _id, { author: pseudo, content: message, date: _date, id: _id }).then(() => { setEdit_message(false); callback() });
        } else {
            console.log('message trop court');
        }

    }

    if (edit_message) {
        return (
            <div class="art_review">
                <b>{pseudo}</b>
                <textarea onChange={(e) => { setMessage(e.target.value); if (e.target.value.length >= 100) { setMessageOk(true) } else { setMessageOk(false) } }}>{_message}</textarea>

                <button onClick={(e) => { modifier_article() }}>valider</button>
                <button onClick={(e) => supprimer_article(e)}>supprimer</button>

            </div >

        );
    } else {
        return (
            <div class="art_review">
                <b>{pseudo}</b>
                <p>{_message}</p>

                <button onClick={(e) => setEdit_message(true)}>modifier</button>
                <button onClick={(e) => supprimer_article(e)}>supprimer</button>

            </div >

        );
    }

};



export default Arcticle;