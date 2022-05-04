
import React from 'react';


export function Officespace() {
    const element = "Office Space";
    const jsxattr = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCexypOPxocBiOq_i474Ef9AQSRAkpA7bSQ&usqp=CAU" width="25%" height="25%" alt="Office Space" />
    const itemname = { name: "DBS", rent: 50000, address: "Chennai" };
    let colors = [];
    if (itemname.rent <= 60000) {
        colors.push("Red");
    }
    else {
        colors.push("Green");
    }
    return (
            <div>
            <h1> {element} , at Affordable range</h1>
            {jsxattr}
            <h1>Name:{itemname.name}</h1>
            <h3 style={{ color:  colors[0]  }}>Rent: Rs.{itemname.rent}</h3>
            <h3>Address:{itemname.address}</h3>
            </div>
        )


}