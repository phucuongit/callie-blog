import React from "react";
import {NavLink} from "react-router-dom";

const DropDownMenu = ({menu}) => {
    return (
                <li className={(menu.submenus.length > 0) ? 'has-dropdown' : ''}>
                    <NavLink exact={true} activeStyle={{
                        backgroundColor : 'white',
                        color : 'red'
                    }} to={menu.url}>{menu.name}</NavLink>
                    {(menu.submenus.length > 0) && (
                        <div className="dropdown">
                            <div className="dropdown-body">
                                <ul className="dropdown-list">
                                    {menu.submenus.map((submenu, index) => {
                                        return (
                                                <li key={index}>
                                                    <NavLink exact activeStyle={{backgroundColor : 'white',color : 'red'}} to={submenu.url}>{submenu.name}</NavLink>
                                                    {submenu.submenus.map( (submenu, index) => {
                                                        return <DropDownMenu key={index} menu={submenu}/>
                                                    })}
                                                </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )}
                </li>
    );
}
export default DropDownMenu;