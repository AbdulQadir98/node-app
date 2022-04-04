var url = 'http://website.come';

function logs(message){
    //send http request
    console.log(message);
}

module.exports.logObj = logs; //make the logs function public