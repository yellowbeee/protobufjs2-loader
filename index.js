
module.exports = function (source) {
  const pbjs = require('protobufjs/cli/pbjs')
  const loaderUtils = require('loader-utils')
  const callback = this.async()
  let loaderOptions = loaderUtils.getOptions(this)
  const options = Object.assign(
    {
      target: 'json-module',
    },
    loaderOptions,
  )

  console.log(this.resourcePath)
  pbjs.main(['--target', options.target, this.resourcePath], (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result)
    }
  })
  return source
}
