import React from 'react';

export const Item = ( {title, precio, cantidad} ) => {
    
    
    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
            <h6 className="my-0 text-dark">{title}</h6>
            </div>
            <span className="text-muted">${precio*cantidad}</span>
      </li>
    )
}

