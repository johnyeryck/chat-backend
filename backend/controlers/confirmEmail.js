export const ConfirmEmail = async (req, res) => {
  let id = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
  const { token } = req.query;
  const decode = jwt.decode(token, "segredo");
  const { hash, email } = decode;
  try {
    const response = await pool.query(
      "INSERT INTO usuarios (email , password , id) VALUES($1,$2,$3)",
      [email, hash, id],
    );
    console.log(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};
