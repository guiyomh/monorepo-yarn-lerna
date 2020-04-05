[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Monorepo with Lerna & Yarn Workspaces

> A Monorepo with multiple packages and a shared build, test, and release process.

-   🐉 [Lerna](https://lernajs.io/)  - The Monorepo manager
-   📦 [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)  -  Sane multi-package management
-   ⚡️ [Flow](https://flow.org/en/) - A static type checker for javascript
-   🛠 [Babel](https://babeljs.io/)  -  Compiles next-gen JavaScript
-   🃏 [Jest](https://jestjs.io/)  -  Unit/Snapshot Testing

## Usage

-   `yarn bootstrap` - This installs all of the packages and links dependent packages together.
-   `yarn build` - This babelfies all of the packages and creates `/lib` folders for each one.
-   `yarn test` - Run all linting and unit tests before committing.
-   `yarn test -o` - Run only the tests that have changed.
-   `yarn test -u` - Update all of the snapshot tests.

## Lerna

-   `lerna changed` - Show which packages have changed.
-   `lerna diff` - Show specifically what files have cause the packages to change.

## Linking

When linking inside of the Monorepo, everything works as expected. If you are trying to consume packages from this Monorepo _in a different application_ locally, using `npm link` or `yarn link` [does not work as expected](https://github.com/yarnpkg/yarn/issues/5538).
