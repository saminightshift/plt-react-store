import React, {useEffect, useState} from "react"
import axios from "axios"

const Menu = () => {

    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getMenu();
    }, [])

    const getMenu = () => {
        axios.get('https://my-json-server.typicode.com/benirvingplt/products/menu')
        .then((res) => res.data)
        .then((menuApi) => setMenus(menuApi))
        .then(setLoading(true))
        .catch((err) => {
            alert(err.message)
        })
     }

    // Return data as different components

    return (
        <>
        <div className="container">
        {loading && menus.map((menu) => (
            <div className="menu">
                <div className="menu-bg">
                    {menu.children.map((child) => (
                        <div>
                            <ul>
                                <li>
                                    {child.name}
                                </li>
                                <li>{child.categories.forEach(function(item) {
                                    const listItems = item;
                                    return listItems;
                                })}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                
            </div>
            ))}
        </div>

        </>
    )
}

export default Menu;