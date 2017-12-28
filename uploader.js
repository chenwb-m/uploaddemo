const rp = require('request-promise')
const fs = require('fs')


const uploadSingle = async () => {
  try {
    await rp({
      method: 'POST',
      uri: 'http://localhost:3000/api/upload',
      formData: {
        // Like <input type="text" name="name">
        name: 'left.jpeg',
        // Like <input type="file" name="file">
        file: {
            value: fs.createReadStream('temp/left.jpeg'),
            options: {
                filename: 'left.jpeg',
                contentType: 'image/jpg'
            }
        }
      }
    }).then((body) => {
      console.log('Success', body)
    }).catch((err) => {
      console.error(err)
    })
  } catch (err) {
    console.log(err)
  }
}


const uploadMulti = async () => {
  try {
    await rp({
      method: 'POST',
      uri: 'http://localhost:3000/api/upload',
      formData: {
        // Like <input type="text" name="name">
        names: ['left.jpeg', 'right.jpeg'],
        // Like <input type="file" name="file">
        file: [{
            value: fs.createReadStream('temp/left.jpeg'),
            options: {
                filename: 'left.jpeg',
                contentType: 'image/jpg'
            }
        }, {
          value: fs.createReadStream('temp/right.jpeg'),
          options: {
              filename: 'right.jpeg',
              contentType: 'image/jpg'
          }
      }]
      }
    }).then((body) => {
      console.log('Success', body)
    }).catch((err) => {
      console.error(err)
    })
  } catch (err) {
    console.log(err)
  }
}

uploadMulti()