import React from 'react';
const RideDetails=({roadDetails})=>{
    console.log(roadDetails);
    const details=(roadDetails.map((details,index)=>{
        return(
            <div key={index} className="margintop-10">
                <div className="card">
                    <div className="container"><p>source: {details.source[0].lat}- {details.source[0].lng}</p>
                     <p>origin: {details.destination[0].lat}- {details.destination[0].lng}</p></div>
                </div>
            </div>
        )
    }))
    return(
        <div>
            {details}
        </div>
    )
}
export default RideDetails;