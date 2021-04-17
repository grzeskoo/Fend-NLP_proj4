import {
    fetchData
} from "../src/client/js/network";

describe("Test for fetchData", () => {
    test('fetchData', () => {
        expect(fetchData).toBeDefined();
    })
})