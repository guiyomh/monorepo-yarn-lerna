const {name} = require('..');

describe('@example/name', () => {
    describe('name()', () => {
        test('should return alice or bob or bobette', () => {
            expect(name()).toMatch(/(alice|bob|bobette)/);
        });
    });
});
