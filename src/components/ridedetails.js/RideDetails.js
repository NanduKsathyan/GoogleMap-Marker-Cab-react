import React from 'react';
const RideDetails=({roadDetails})=>{
    console.log(roadDetails);
    const details=(
        roadDetails.map((details,index)=>{
        return(
            <div key={index} className="margintop-10">
                <div className="card">
                    <div className="container">
                        <p><span className="highlighter">SOURCE:</span> {details.source}</p>
                     <p><span className="highlighter">ORIGIN:</span> {details.destination}</p>
                     </div>
                </div>
            </div>
        )
    }))
    return(
        <div className="margintop-10">
            {details}
        </div>
    )
}
export default RideDetails;