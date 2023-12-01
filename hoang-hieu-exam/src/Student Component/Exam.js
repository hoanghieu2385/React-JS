import React from 'react';

const Student = ({ id, name, image, email}) => {
    return (
        <div className="card ">
                    <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>Student id: {id}</p>
                            <h3>{email}</h3>
                    </div>
        </div>
    );
}

export default Student