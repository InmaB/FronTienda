import React from "react";
import Products from "../Components/Products";
import SideMenu from "../Components/SideMenu";

const Inicio = () => {
  return (
    <>
      <div class="flex flex-wrap justify-between  w-full h-full">
        <div class="w-2/12 bg-white rounded pl-3">
          <SideMenu />
        </div>
        <div class="ml-2 w-9/12">
          <Products></Products>
        </div>
      </div>
    </>
  );
};

export default Inicio;
