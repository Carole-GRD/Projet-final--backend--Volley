

const isSameId = () => {
    return async (req, res, next) => {
        // console.log(req.user.id);
        if (req.user.role !== 'admin') {
            if (req.user.id !== req.params.id) {
                return res.sendStatus(401);
            }
        }
        
        next();
    }
};

module.exports = isSameId;