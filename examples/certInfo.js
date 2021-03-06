const node_openssl = require('../index.js');
var fs = require('fs');

var options = {
	//binpath: 'C:/Program Files/OpenVPN/bin/openssl.exe'
	binpath: 'C:/Program Files/OpenSSL-Win64/bin/openssl.exe'
}

var openssl = new node_openssl(options);

fs.readFile('./godaddy.cer', function(err, contents) {
	openssl.getCertInfo(contents, function(err, attrs, cmd) {
		if(err) {
			console.log(err);
		} else {
			console.log(attrs);
			console.log(openssl.getDistinguishedName(attrs.subject));
		}
	});
});