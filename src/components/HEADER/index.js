import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <div className='navbar'>
                <div>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/insert"><p>Insert</p></Link>
                    {/* <select>
                        <option>abc</option>
                        <option>abc</option>
                        <option>abc</option>
                        <option>abc</option>
                    </select> */}
                </div>
            </div>
        </>
    );
}

export default Menu;