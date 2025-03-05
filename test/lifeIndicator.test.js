import lifeIndicator from '../lifeIndicator.js';
test.each([
    [
        'critical', 10
    ],
    [
        'wounded', 45
    ],
    [
        'healthy', 75
    ],
])(
    ('indicator %c for life level %l'),
    (color, level) => {
        const result = lifeIndicator({
            name: 'Маг', health: level
        });
        expect(result).toBe(color);
    });