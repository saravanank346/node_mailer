const nodeMailer = require('nodemailer');
const transpoter = nodeMailer.createTransport({ 

    service:"gmail",
    auth:{
        user:"k12564290@gmail.com",
        pass:"gfmsjwvujpsmewsv"
    }


});

var mailOptions = {
    from: "k12564290@gmail.com",
    to: "sragul181@gmail.com",
    subject: "hii ragul",
    text: "hiii"
    };

transpoter.sendMail(mailOptions,function (error,results) {
    if(error){
        console.log(error);
    }else{
        console.log("Email sent: "+results.response);
    }
});
    