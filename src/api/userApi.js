/* eslint-disable class-methods-use-this */

import { BASE_URLS } from '../constants';
import FetchQuery from '../helpers/fetch-tool';

class UserApi {
    async getUserList() {
        const response = await FetchQuery.get(`${BASE_URLS.users}`);

        if (!response.ok) {
            throw new Error(
                `UserApi: getUserList failed, HTTP status ${response.status}`
            );
        }

        return response.json();
    }

    async createUser(newUser) {
        const response = await FetchQuery.post(`${BASE_URLS.users}`, {
            body: JSON.stringify(newUser)
        });

        if (!response.ok) {
            throw new Error(
                `UserApi: createUser failed, HTTP status ${response.status}`
            );
        }

        return response.status;
    }

    async getUser(userID) {
        const response = await FetchQuery.get(`${BASE_URLS.users}${userID}`);

        if (!response.ok) {
            throw new Error(
                `UserApi: displayUser failed, HTTP status ${response.status}`
            );
        }

        return response.json();
    }

    async updateUser(editedUser) {
        const response = await FetchQuery.patch(`${BASE_URLS.users}`, {
            body: JSON.stringify(editedUser)
        });

        if (!response.ok) {
            throw new Error(
                `UserApi: updateUser failed, HTTP status ${response.status}`
            );
        }

        return response.json();
    }

    async deleteUser(userID) {
        const response = await FetchQuery.delete(`${BASE_URLS.users}${userID}`);

        if (!response.ok) {
            throw new Error(
                `UserApi: deleteUser failed, HTTP status ${response.status}`
            );
        }

        return response.status;
    }

    async filterList(filteringValue) {
        const response = await FetchQuery.post(`${BASE_URLS.users}`, {
            body: JSON.stringify({ filteringValue })
        });

        if (!response.ok) {
            throw new Error(
                `UserApi: filterList failed, HTTP status ${response.status}`
            );
        }

        return response.json();
    }
}

export default new UserApi();
