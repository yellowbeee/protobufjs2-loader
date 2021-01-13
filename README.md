# protobufjs2-loader
Webpack loader to translate .proto definitions to [ProtoBuf.js](https://github.com/dcodeIO/ProtoBuf.js/) modules. Equivalent to running your definitions through the [pbjs CLI](http://protobufjs.github.io/protobuf.js/index.html#pbjs-for-javascript).



## Install
```bash
npm install -D protobufjs2-loader
```

## Usage
```bash
// webpack.config.js

module.exports = {
    ...
    module: {
        rules: [{
            test: /\.proto$/,
            use: {
              loader: 'protobufjs2-loader',
              options: {
                target: 'json-module'
                /* controls the "target" flag to pbjs - true for
                 * json-module, false for static-module.
                 */
              }
            }
        }]
    }
}

// webpack-chain

config.module
    .rule('proto')
    .test(/\.proto$/)
    .use('protobufjs2-loader')
    .loader('protobufjs2-loader')
    .options({
      target: 'json-module',
    })
    .end()
```

```js
// index.js

import PB from 'src/proto/test.proto'
```