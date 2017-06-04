
var AWS = require('aws-sdk');
var phantomjs = require('phantomjs-prebuilt');

exports.handler = function(event, context, callback) {
    
    var phantom = phantomjs.exec('phantomjs-script.js', 'https://www.adidas.com/us/pureboost-shoes/CG2986.html', 'arg2');

    phantom.stdout.on('data', function(buf) {
        console.log('[STR] stdout "%s"', String(buf));
    });
    phantom.stderr.on('data', function(buf) {
        console.log('[STR] stderr "%s"', String(buf));
    });
    phantom.on('close', function(code) {
        console.log('[END] code', code);
    });

    phantom.on('exit', code => {
        callback(null, 'fin!!');
    });

};