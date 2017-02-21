var shot = require('shot');
var test = require('tape');
var mainHandler = require('../index.js');
var utils = require('../utils.js');

test('GET /: should return form html', function(t) {
    shot.inject(mainHandler, { method: 'GET', url: '/' }, function(res) {
        var indexOf = res.payload.indexOf('form');
        t.notEqual(indexOf, -1, 'got form somewhere in the html');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});

test('post/form: should return profile html', function(t) {
    shot.inject(mainHandler, {
        method: 'POST',
        url: '/form',
        //Here we put correct password and user ame
        payload: 'usrname=rana&usrpass=123654'
    }, function(res) {
        t.equal(res.statusCode, 302, 'got 302 status code');
        t.equal(res.headers.location, "profile", "response profile correctly");
        t.end();
    });
});

test('when insert incorrect pass or usrname it shouldreturn form.html', function(t) {
    shot.inject(mainHandler, {
        method: 'POST',
        url: '/form',
        /*Here we put incorrect password
        */
        payload: 'usrname=rana&usrpass=1236540'
    }, function(res) {
        var indexOf = res.payload.indexOf('form');
        t.notEqual(indexOf, -1, 'got form somewhere in the html');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});
