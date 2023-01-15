const handler = async (req, res) => {
  return res.json({
    match: req.body["password-input"] == process.env.DM_PASSWORD,
  });
};

export default handler;
