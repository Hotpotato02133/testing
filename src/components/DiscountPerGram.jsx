import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudComponent = () => {
    const [data, setData] = useState([]);
    const [isCardVisible, setIsCardVisible] = useState(false);
    const [newItem, setNewItem] = useState({ promoId: 2, term: '', karat: '', value: ''});
    const [editItem, setEditItem] = useState(null);
    const [term, setTerm] = useState(0);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;


    useEffect(() => {
        if (isCardVisible) {
            fetchData();
        }
    }, [isCardVisible, term, page]);


    const fetchData = async () => {
        try {
            const response = await axios.get(`https://oroerp.net/erp/api/j/profile/discount/credit/${term}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleCreate = async () => {
        try {
            await axios.post('https://oroerp.net/erp/api/j/profile/discount/credit/create', newItem);
            fetchData();
            setNewItem({ promoId: 2, term: '', karat: '', value: ''});
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`https://oroerp.net/erp/api/j/profile/discount/credit/update/${id}`, editItem);
            fetchData();
            setEditItem(null);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://oroerp.net/erp/api/j/profile/discount/credit/delete/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const han
}