import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <>
            <p className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                <p>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </p>
            </p>
        </>
    );
}

export default Card;