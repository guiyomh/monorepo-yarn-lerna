const {hello} = require('..');

describe('@example/hello', () => {
    describe('hello()', () => {
        test('should return hello', () => {
            expect(hello()).toEqual('hello');
        });
    });
});
