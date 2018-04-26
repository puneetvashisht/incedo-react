// function Button(props){
//     return (

//     )
// }

import React from 'react';

const Button = (props) => (
        <button onClick={props.whenClick} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.caption}
       </button>
);

export default Button;