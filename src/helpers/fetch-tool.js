/* eslint-disable class-methods-use-this */

const baseHeader = {
    'Content-Type': 'application/json',
    "Authorization": authenticateUser('pavel.piasetski@default', '123456789')
};

function authenticateUser(user, password) {
    const token = user + ":" + password;

    const hash = btoa(token);
    return "Basic " + hash;
}

const getHeaders = (headers, baseHeaders, setHeaders) => {
    let newHeaders = {};

    if (setHeaders) {
        newHeaders = headers || baseHeaders;
    }

    return newHeaders;
};

class FetchQuery {
    get(url, options = {}) {
        const { headers, setHeaders = true } = options;
        const requestHeaders = getHeaders(headers, baseHeader, setHeaders);
        return fetch(url, {
            headers: {
                ...requestHeaders
            },
            method: 'GET',
            mode: "cors"
        });
    }

    post(url, options = {}) {
        const { headers, body, setHeaders = true } = options;
        const requestHeaders = getHeaders(headers, baseHeader, setHeaders);

        return fetch(url, {
            headers: {
                ...requestHeaders
            },
            method: 'POST',
            body
        });
    }

    put(url, options = {}) {
        const { headers, body, setHeaders = true } = options;
        const requestHeaders = getHeaders(headers, baseHeader, setHeaders);

        return fetch(url, {
            headers: {
                ...requestHeaders
            },
            method: 'PUT',
            body
        });
    }

    patch(url, options = {}) {
        const { headers, body, setHeaders = true } = options;
        const requestHeaders = getHeaders(headers, baseHeader, setHeaders);

        return fetch(url, {
            headers: {
                ...requestHeaders
            },
            method: 'PATCH',
            body
        });
    }

    delete(url, options = {}) {
        const { headers, body, setHeaders = true } = options;
        const requestHeaders = getHeaders(headers, baseHeader, setHeaders);

        return fetch(url, {
            headers: {
                ...requestHeaders
            },
            method: 'DELETE',
            body
        });
    }
}

export default new FetchQuery();
