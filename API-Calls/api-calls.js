const axios = require('axios')

exports.getExample = async function(id) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + id)
        return response
    } catch (error) {
        throw Error('error');
    }
}

exports.postExample = async function(data) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos/', data)
        return response
    } catch (error) {
        throw Error('error');
    }
}