const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        if (req.user && req.user.role === requiredRole) {
            next();
        } else {
            res.status(403).send({message: "Access denied"});
        }
    }
}

module.exports = roleMiddleware;