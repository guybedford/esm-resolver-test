# ESM Test Case - Custom Resolver

`custom-esm.js` implements a custom resolver while wrapping "esm".

The goal is for the following to work in the base folder of this repo:

```
node -r ./custom-esm.js anyname.js
```

Where the example resolver resolves everything to "test.js" so that
this should load `test.js` as a module, with its relative import to
'./asdf' also resolving to `test.js` itself returning the valid
logs.

Instead, what seems to be happening is that ESM is not applying when
used in this `require('esm')` form and as a result the error is thrown
`Unexpected token import`.

What can be done to support an ESM resolver wrapper like this?