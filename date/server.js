const express = require("express");
const moment = require("moment-timezone"); // Timezone library

const app = express();
const PORT = 8080;

// Route to return Australia's current date and time
app.get("/", (req, res) => {
    const australiaTime = moment().tz("Australia/Sydney").format("YYYY-MM-DD HH:mm:ss");
    res.send(`Current time in Sydney, Australia: ${australiaTime}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});