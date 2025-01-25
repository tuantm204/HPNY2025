const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import thư viện CORS
const connection = require('./db');

const app = express();
const PORT = 3000;

// Kích hoạt CORS cho mọi nguồn
app.use(cors());

// Middleware xử lý dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: true }));

// API xử lý khi gửi lời chúc
app.post('/submit-feedback', (req, res) => {
    const { name, feedback } = req.body;
    if (!name || !feedback) {
        return res.status(400).send('Tên và lời chúc không được để trống.');
    }
    const insertQuery = `INSERT INTO Content (name, content) VALUES (?, ?)`;
    connection.query(insertQuery, [name, feedback], (err, result) => {
        if (err) {
            console.error('Lỗi khi lưu dữ liệu:', err);
            return res.status(500).send('Lỗi khi lưu dữ liệu vào cơ sở dữ liệu.');
        }
        console.log('Dữ liệu đã được lưu thành công:', result);
        res.status(200).send('Lời chúc của bạn đã được gửi thành công!');
    });
});
// Lắng nghe trên cổng 3000
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://127.0.0.1:${PORT}`);
});