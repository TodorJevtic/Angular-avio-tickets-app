const BASE_URL = 'http://localhost:5000'

export const TICKETS_URL = BASE_URL +'/api/tickets';
export const TICKETS_TAGS_URL = TICKETS_URL +'/tags';
export const TICKETS_BY_SEARCH_URL = TICKETS_URL +'/search/';
export const TICKETS_BY_TAG_URL = TICKETS_URL +'/tags/';
export const TICKETS_BY_ID_URL = TICKETS_URL +'/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';

export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
