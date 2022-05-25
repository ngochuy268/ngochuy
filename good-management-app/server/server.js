const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'qlkh',
    password: '123456'
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "select * from users where name = ? and password = ? ", [username, password], (err, result) => {
            if (err) {
                res.send({err: err})
            }
            else {
                if (result.length > 0) {
                    res.send(result);
                }
                else {
                    res.send({ messagae: "Tài khoản hoặc mật khẩu nhập sai!"})
                }
            }
        }
    )
})

app.listen('3001', () => {
    console.log('running server');
})