const { ADMIN_ROLE, SELLER_ROLE } = require("../constansts/role");

const canDeleteBook = (req, res, next) => {
  if (req.role === ADMIN_ROLE || req.role === SELLER_ROLE) {
    next();
  }

  return res.sendStatus(403);
};

const canCreateBook = (req, res, next) => {
  if (req.role === SELLER_ROLE) {
    next();
  }

  return res.status(403).send("you are not a seller");
};

module.exports = {
  canDeleteBook,
  canCreateBook,
};
