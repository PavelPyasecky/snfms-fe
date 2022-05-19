const BASE_URL = 'http://localhost:8080';

const BASE_URLS = {
    main: `${BASE_URL}`,
    users: `${BASE_URL}/api/users/`,
    productFilter: `${BASE_URL}/api/product/filter/`,
    productSecondFilter: `${BASE_URL}/api/product/filter?search=`
};


export default BASE_URLS;
