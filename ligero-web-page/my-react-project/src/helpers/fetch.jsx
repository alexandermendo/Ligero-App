const baseUrl = import.meta.env.VITE_REACT_APP_MI_VARIABLE_DE_ENTORNO;

const fetchSinToken = ( endpoint, data, method = 'GET') => {
    const url = `${ baseUrl}${ endpoint }`;

    if( method === 'GET'){
        console.log("fetch con get");
        return fetch( url );
    } else {
        console.log("fetch con post");
        return fetch(url,{
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {
    const url = `${ baseUrl }${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }
}

export{
    fetchSinToken,
    fetchConToken
}