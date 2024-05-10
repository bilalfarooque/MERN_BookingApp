import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "you are not authorized"));
  }

  jwt.verify(token, "uganda", (err, user) => {
    if (err) {
      return next(createError(403, "Invalid Token"));
    } else {
      req.user = user;
      next();
    }
  });
};

export const verifyUser = (req, res, next) => {
  //first verify token
  verifyToken(req, res,next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err)
        return next(
          createError(403, "You are not authorized to update user")
        );
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  //first verify token
  verifyToken(req, res,next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      if (err)
        return next(
          createError(403, "You are not authorized to update anything")
        );
    }
  });
};
