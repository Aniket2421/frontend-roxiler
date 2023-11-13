import React from 'react'
import "./static.css"

const Statics = ({ data, selectedOption }) => {

    return (
        <div className='static-div'>
            <p className='fw-bold text-center pt-3' style={{ fontSize: "26px", color: "#070707", cursor: "pointer" }}>Statistics - {selectedOption}</p>
            <div className='text-center p-5' style={{ backgroundColor: "aqua", borderRadius: "20px", cursor: "pointer" }}>
                <p style={{ fontWeight: 'bold', color: "#675c3a" }}>{`Total Sale: ${Math.round(data?.totalSaleAmount)}`}</p>
                <p style={{ fontWeight: 'bold', color: "#675c3a" }}>{`Total sold item: ${data?.soldItemsCount}`}</p>
                <p style={{ fontWeight: 'bold', color: "#675c3a" }}>{`Total not sold item: ${data?.unsoldItemsCount}`}</p>
            </div>
        </div>
    )
}

export default Statics;
