
//for missing fields in the model 

module.exports = func => (req, res, next)=>
        Promise.resolve(func(req, res, next)).catch(next)
