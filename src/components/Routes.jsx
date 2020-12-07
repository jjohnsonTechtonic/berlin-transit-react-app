import React from 'react';
import Route from './Route';

const Routes = ({routes,isLoading}) => {
    return (
        <>
            {isLoading?
                <h2>Loading...</h2>:
                <>
                {routes.length?
                <ul className="routes">
                {routes.map((info,index) => {
                    return <li className="route-item" key={`${info.stop.id}-${index}`}><Route info={info}/></li>
                })}
            </ul>: <p>Routes will show up here</p>
            } 
            </>
            }
        </>
    )
}

export default Routes;