import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export function setupApiMock() {
    const mock = new MockAdapter(axios);

    // Example API endpoint
    const endpoint = '/api/users';

    // Example mock response
    const mockResponse = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ];

    mock.onGet(endpoint).reply(200, mockResponse);

    return mock;
}

export function setupNegativeLoginMock() {
    const mock = new MockAdapter(axios);

    // Example API endpoint
    const endpoint = "/api/auth";

    // Example mock response
    const mockResponse = { statusCode: 403, msg: "Forbidden" };

    mock.onGet(endpoint).reply(403, mockResponse);

    return mock;
}

export function setupPositiveLoginMock() {
    const mock = new MockAdapter(axios);

    // Example API endpoint
    const endpoint = "/api/auth";

    // Example mock response
    const mockResponse = { statusCode: 200, msg: "Success" };

    mock.onGet(endpoint).reply(200, mockResponse);

    return mock;
}

