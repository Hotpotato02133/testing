import React, {useState, useEffect} from 'react'
import Card from './Card';
import './dashboard.css';
import Reports from './Reports';
import RecentSales from './RecentSales';
// import TopSelling from './TopSelling';
// import RecentActivity from './RecentActivity';
// import BudgetReport from './BudgetReport';
import OroBranches from './OroBranches';
import OroReport from './OroReport';
import Employee from './Employee';
// import Payroll from './PayrollTable';
import StockArrival from './StockArrival';
import Payslip from './Payslip';
import Dtr from './Dtr';
// import Payroll from './Payroll';
import Dtr1 from './Dtr1';
import Conso from './Conso';
// import Test1 from './Test1';
import CreditDiscountBtn from './CreditDiscountBtn';
import Hamster from './Hamster';
import LogoSpinner from './LogoSpinner';


function Dashboard() {
    const [cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <section className="dashboard section">
        <div className="row">
        <div className='col-lg-12'>
                <div className='row'>
                    <Card />
                    {/* {cards &&
                        cards.length > 0 &&
                        cards.map(card => <Card key={card._id} card={card} />)} */}
                </div>
                {/* <div className='row'>
                    <RecentSales />
                </div> */}

            </div>
            
            <div className="col-lg-8">
                <div className="row">
                        {/* <div className='col-12'>
                            <StockArrival />
                        </div> */}
                        <div className='col-12'>
                            <Reports />
                        </div>
                        {/* <div className='col-12'>
                            <Hamster />
                        </div> */}
                        {/* <div className='col-12'>
                            <LogoSpinner />
                        </div> */}
                        {/* <div className='col-12'>
                            <Payslip />
                        </div>
                        <div className='col-12'>
                            <Dtr />
                        </div>
                        <div className='col-12'>
                            <Dtr1 />
                        </div> */}
                        
                </div>
            </div>
            <div className="col-lg-4">
                <OroBranches />
                <CreditDiscountBtn />


            </div>
            <div className='col-lg-12'>
                <div className='row'>
                </div>
                {/* <OroReport />
                <Conso />
                <Employee /> */}
                {/* <Payroll /> */}
            </div>
        </div>
    </section>
  );
}

export default Dashboard;
