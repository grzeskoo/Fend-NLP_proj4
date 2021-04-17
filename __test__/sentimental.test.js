import {
    score
} from "../src/client/js/sentimental";

describe("Check for Valid score", () => {
    test('very positive label', () => {
        const expectedValue = 'Very Positive';
        expect(score('P+')).toBe(expectedValue);
    })
})