const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.errors[0]?.message || "Validation Error";

    const error = {
      status,
      message,
      extraDetails,
    };
    console.error(error);

    // res.status(422).json({ error });
    next(error);
  }
};

module.exports = validate;
