const express = require("express"); // framework for http server
const cors = require("cors"); // to make call to our server from other place.
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "b751f002-f3ee-4cbf-9c10-58517fcf304b"}}
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
    return res.json({ username: username, secret: "sha256..." });
});

const port = process.env.PORT || 3001
app.listen(port);