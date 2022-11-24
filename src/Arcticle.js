import React from 'react';

const Arcticle = ({ pseudo, message }) => {
    return (
        <div class="art_review">
            <b>{pseudo}</b>
            <p>{message}</p>
        </div>
    );
};

export default Arcticle;