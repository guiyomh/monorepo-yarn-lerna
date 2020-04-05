// @flow

const {hello} = require('@example/hello');
const {name} = require('@example/name');

function helloworld(): void {
    console.log(`${hello()} ${name()}`);
}

module.exports = {
    helloworld
};
