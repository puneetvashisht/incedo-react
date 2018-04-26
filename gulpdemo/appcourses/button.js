// function Button(props){
//     return (

//     )
// }

import React from 'react';

const Button = (props) => (
        <button onClick={props.whenClick} className="btn btn-secondary" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                    {props.caption}
       </button>
);

export default Button;