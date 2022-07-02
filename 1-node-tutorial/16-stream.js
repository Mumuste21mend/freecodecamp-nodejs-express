const { createReadStream } = require('fs');

// const stream = createReadStream('./content/big.txt')
// basically this stream makes us read the data in chuncks 
// default is 64kb 
// last buffer  -- remainder 
//  highWaterMark -- control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 110000 })
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' })
//  
stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})