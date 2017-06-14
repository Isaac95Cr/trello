
const sendErrorResponse = (res, err, status = '404') =>
    res.status(status).send(err);
    
const sendJsonResponse = (res, data, status = '200') =>
    res.status(status).json(data);

const saveModel = (model, res) => 
        model.save((err, data) => {
            if (err) {
                sendErrorResponse(res, err, '500');
            } else {
                sendJsonResponse(res, data, '201');
            }
        })
module.exports = {
    sendErrorResponse,
    sendJsonResponse,
    saveModel
}