import React from 'react'
import { NavLink } from "react-router-dom";
function SideBar() {
    return (
        <>
            <div className='container2' style={{marginRight:20}}>
                <div className="box1">
                    <ul className="list-group mt-1">

                        <div id='m2' style={{width:272}}>
                            <li className="list-group-item active bg-dark border-0 ">
                                {" "}
                                <ul>
                                    <li className="list-group-item active bg-dark border-0" />
                                    <li id='clr' className="list-group-item active bg-dark border-0">Category</li>
                                    <li className="list-group-item active bg-dark border-0" />
                                </ul>{" "}
                            </li>
                            <li className="list-group-item" ><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/Electronics">Electronics</NavLink>  </li>
                            <li className="list-group-item" ><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/MensTopWear">Men's Top Wear</NavLink>  </li>
                            <li className="list-group-item" >< NavLink style={{ textDecoration: 'none', color: 'black' }} to="/MensBottomWear">Mens's Bottom Wear</NavLink></li>
                            <li className="list-group-item" ><a style={{ textDecoration: 'none', color: 'black' }} href="/">Women Ethnic</a>  </li>
                            <li className="list-group-item" ><a style={{ textDecoration: 'none', color: 'black' }} href="/">Women Western</a>  </li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>

                        </div>
                    </ul>
                    <ul>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default SideBar