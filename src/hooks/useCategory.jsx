import React, { useEffect, useState } from 'react';

const useCategory = (item) => {
    console.log(item)
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/menu-item/?category=${item}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategory(data);
            })
    }, [item])
    return category;
};

export default useCategory;