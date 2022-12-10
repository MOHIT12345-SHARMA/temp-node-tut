const os = require('os');
// info about current user
const user = os.userInfo()
console.log(user)
// methods returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)
const currentOS = {
    name : os.type(),
    release : os.release(),
    total_Memory : os.totalmem(),
    free_Memory : os.freemem()
}
console.log(currentOS)