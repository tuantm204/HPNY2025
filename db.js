const mysql = require('mysql2');

// Tạo kết nối MySQL
const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    port: ,
});

// Kết nối MySQL
connection.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối MySQL:', err);
    } else {
        console.log('Kết nối thành công đến MySQL!');
    }
});
module.exports = connection;