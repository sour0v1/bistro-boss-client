import { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu)

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMenu(data);
            })
    }, [])
    return menu;
};

export default useMenu;