export const login = async (req,res)=>{
    const { email, password } = req.body;
      console.log(email);
      
        const consultation = await pool.query(
          "SELECT * FROM usuarios WHERE email = $1 AND password = $2",
          [email, password],
        );
        if (consultation.rowCount > 0) res.sendStatus(200)
        res.sendStatus(400)
}