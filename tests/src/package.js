var expect = require('chai').expect

var path = require('path')
  , fs = require('fs')

function isJSFile(f) {
  return path.extname(f) === '.js'
}

describe('package', function () {
  let pkg = path.join(process.cwd(), 'src')
    , module

  before('is importable', function () {
    module = require(pkg)
  })

  it('exists', function () {
    expect(module).to.exist
  })

  it('has every rule', function (done) {

    fs.readdir(
      path.join(pkg, 'rules')
    , function (err, files) {
        expect(err).not.to.exist

        files.filter(isJSFile).forEach(function (f) {
          expect(module.rules).to.have
            .property(path.basename(f, '.js'))
        })

        done()
      })
  })

})
