const {data} = require('../Static/data')

class content {
    constructor({
        type,
        page
    }) {

    }

    homePage (){ 
       return data.home
    }

    
}

module.exports = content