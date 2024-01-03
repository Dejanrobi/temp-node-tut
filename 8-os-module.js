const os = require('os')

// currentUser info
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
const systemUptime = os.uptime()

console.log(`The System Uptime is: ${systemUptime} seconds`)

// Current Os details
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOS)