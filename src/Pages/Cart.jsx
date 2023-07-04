import React from 'react'
import Cesta from '../Components/Cesta';
import SideMenu from '../Components/SideMenu';

export default function Cart() {
    return (
        <>
            <div class="flex flex-wrap justify-between  w-full h-full">
                <div class="w-2/12 bg-white rounded pl-3">
                    <SideMenu />
                </div>
                <div class="ml-2 w-9/12">
                    <Cesta></Cesta>
                </div>
            </div>
        </>
    );
};
