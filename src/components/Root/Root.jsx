import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css'

const Root = () => {

    const navigation = useNavigation();
    const isnavigating = Boolean(navigation.location);
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
               <SideBar></SideBar>
               {
                isnavigating && <span>Loading...</span>
               }
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;

// 1. use: userpromise > Suspense > Promise > use(userpromise)
// 2.[less used so far] > useState + useEffect (() =>{},[])
// 3. set loader in the route definition; load data before router component is rendered