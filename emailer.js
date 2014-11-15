var nodemailer = require('nodemailer');

exports.send = function(email, subject, text){
	var smtpTransport = nodemailer.createTransport('SMTP',{
	    service: 'Gmail',
	    auth: {
	        user: 'boostaateam@gmail.com',
	        pass: 'boost2013'
	    }
	});
	
	if(!subject || subject === ''){
		subject = 'Welcome to Boostaa!';
	}
	
	if(!text || text === '' ){
		text = 'Thank you for signing up for Boostaa!\n\n\n' +
		'You can really help us out by sharing with your friends: http://www.boostaa.com\n\n\n' +
		'Thank you,\n\n' +
		'Boostaa Team';
	}

	var message = {
		    from: 'boostaateam@gmail.com', 
		    to: email, 
		    subject: subject,
		    html: text
		};

	smtpTransport.sendMail(message, function(error, response){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent:' + response.message);
	    }
	});
};