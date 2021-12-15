const express = require("express");

const bodyParser = require("body-parser");
const { append } = require("express/lib/response");

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
