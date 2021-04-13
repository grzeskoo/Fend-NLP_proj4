import {
    scoreTagText
} from "../client/js/sentimental";

test('very positive label', () => {
    expect(scoreTagText('P+')).toBe('P + Very Positive')
})

test('positive label', () => {
    expect(scoreTagText('P')).toBe('P Positive')
})

test('neutral label', () => {
    expect(scoreTagText('NEU')).toBe('NEU Neutral')
})

test('negative label', () => {
    expect(scoreTagText('N')).toBe('N Negative')
})

test('very negative label', () => {
    expect(scoreTagText('N+')).toBe('N+ Very Negative')
})

test('none label', () => {
    expect(scoreTagText('NONE')).toBe('None')
})