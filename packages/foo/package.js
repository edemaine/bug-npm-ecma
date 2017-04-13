Package.describe({
  name: 'foo',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use('ecmascript');
  api.mainModule('foo.js');
});

Npm.depends({nodemailer: "4.0.1"});
