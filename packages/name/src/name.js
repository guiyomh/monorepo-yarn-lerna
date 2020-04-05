// @flow

function name(): string {
    const names = ['bob', 'alice', 'bobette'];
    return names[Math.floor(Math.random() * names.length)];
}

module.exports = {
    name
};
