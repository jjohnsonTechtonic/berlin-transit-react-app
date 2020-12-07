import React, { useEffect } from 'react';
import { getLinkAndText } from '../scripts/utilities';
const Route = ({info:{tripId,delay,direction,plannedWhen,platform,line,remarks}}) => {
    const {express,night,metro,mode,product,public:pblc} = line;
    const warnings = remarks.filter((info) => info.type === 'warning');
    console.log(warnings);
    return (<>
        <div className="route-item__main-info">
            <h3>{direction}</h3>
            <h4>Trip Id: {tripId}</h4>
            <p>Planned: {plannedWhen}</p>
            {delay?<p className="route-item__main-info--delayed">{`Delayed ${Math.abs(delay)} minutes`}</p>:<></>}
            {platform?<p>Platform {platform}</p>:<></>}
        </div>
        <div className="route-item__extras">
            <i className={`fas fa-${mode}`}></i>
            {pblc?<i className="fas fa-users"></i>:<></>}
            {express?<i className="fas fa-bolt"></i>:<></>}
            {night?<i className="fas fa-moon"></i>:<></>}
        </div>
        <div className="route-item__warnings">
            {warnings.map(({summary,text}) => {
                const markup = {__html:text};
                return <article>
                    <h5>{summary}</h5>
                    <span dangerouslySetInnerHTML={markup}></span>
                </article>
            })}
        </div>
    </>)
}

export default Route;