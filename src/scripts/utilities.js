export function getDataById(stopId){
    return fetch(`https://v5.vbb.transport.rest/stops/${stopId}/departures`)
}

export function getResultsBySearch(searchTerm){
    return fetch(`https://v5.vbb.transport.rest/locations?query=${searchTerm}`);
}

export function slugify(txtIn){
    return txtIn.trim().toLowerCase().replace(' ','-');
}

export function getLinkAndText(anchorTag){
    const theLink = anchorTag.match(/(http(s)?:[\/\w\.]+)/gi);
    const theText = anchorTag.match(/[\w\W\s]+(?=<\/a>)/gi);
    return [theLink[0], theText[0].substring(1)];
}