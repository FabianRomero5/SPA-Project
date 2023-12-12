const catchedAsync = (fn) => (req, res, next) => {
        fn(req, res, next).catch((error) => next(error));
};


module.exports = catchedAsync;
