const {helloworld} = require('..');

describe('@example/helloworld', () => {
    describe('helloworld()', () => {
        test('should return "hello xxx"', () => {
            console.log = jest.fn();
            helloworld();
            expect(console.log.mock.calls[0][0]).toMatch(/hello (\w+)/);
        });
    });
});
