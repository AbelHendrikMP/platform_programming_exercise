const response = (statusCode, data, message, res) => {
    res.json(statusCode, [
        {
            payload: {
                status_code: statusCode,
                datas: data,
                message: message
            },
            metadata: {
                
                prev:"",
                next:"",
                max:""

            },
        },
    ])
}

module.exports = response