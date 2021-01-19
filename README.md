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

## Examples

### Using .proto files

```js
// src/proto/awesome.proto
package awesomepackage;
syntax = "proto3";

message AwesomeMessage {
    string awesome_field = 1; // becomes awesomeField
}
```

```js
// index.js

import PB from 'src/proto/awesome.proto'

const AwesomeMessage = PB.lookup('awesomepackage.AwesomeMessage')

// Exemplary payload
var payload = { awesomeField: "AwesomeString" };

// Create a new message
var message = AwesomeMessage.create(payload);

// Encode a message to an Uint8Array (browser) or Buffer (node)
var buffer = AwesomeMessage.encode(message).finish();

// Decode an Uint8Array (browser) or Buffer (node) to a message
var message = AwesomeMessage.decode(buffer);

```