import React, { useState } from 'react';
import CreditDiscountModal from './CreditDiscountModal';
import './CreditDiscountBtn.css';

const CreditDiscountBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className='gradient-button' onClick={handleOpenModal}>Sample Button</button>
            {isModalOpen && <CreditDiscountModal onClose={handleCloseModal} />}
        </div>
    );
};

export default CreditDiscountBtn;
