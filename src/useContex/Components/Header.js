import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <div>
            <h2 className='text-center'>react context api tutorial</h2>

            <ul className="nav">
                <li className="prod">
                    <Link to='/'>Home page</Link>
                </li>

                <li className="prod1">
                    <Link to='/cart'>Cart page</Link>
                </li>
            </ul>



        </div>
    );
}

export default Header;