const app = require("express")();
const port = 3000;

app.use('/sumar', require('./routes/sum_routes'));
app.use('/restar', require('./routes/substract_routes'));
app.use('/multiplicar', require('./routes/multiply_routes'));
app.use('/dividir', require('./routes/divide_routes'));

app.listen(port, () => {
    console.log(`Operations app listening at http://localhost:${port}`);
});

// app.js -> routes -> services -> infrastructure -> db