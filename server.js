// const express = require('express');
// const fs = require('fs');  // Để thao tác với file
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/submit-feedback', (req, res) => {
//     const { name, feedback } = req.body;

//     // Chuẩn bị dữ liệu cần lưu
//     const feedbackData = `Tên: ${name}\nPhản hồi: ${feedback}\n\n`;

//     // Lưu dữ liệu vào file 'feedback.txt'
//     fs.appendFile('feedback.txt', feedbackData, (err) => {
//         if (err) {
//             console.error('Lỗi khi lưu dữ liệu:', err);
//             res.status(500).send('Đã có lỗi xảy ra khi lưu phản hồi.');
//         } else {
//             res.send("Cảm ơn bạn đã gửi phản hồi!");
//         }
//     });
// });

// app.listen(3000, () => console.log('Server đang chạy tại http://localhost:3000'));

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const bodyParser = require('body-parser');

// // Sử dụng CORS middleware
// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/submit-feedback', (req, res) => {
//     const { name, feedback } = req.body;
//     // Xử lý dữ liệu phản hồi ở đây
//     console.log(`Tên: ${name}, Lời chúc: ${feedback}`);
//     res.send("Cảm ơn bạn đã gửi phản hồi!");

// });

// app.listen(3000, () => console.log('Server đang chạy tại http://localhost:3000'));

// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');  // Đảm bảo rằng fs đã được require
// const bodyParser = require('body-parser');

// const app = express();

// // Sử dụng CORS middleware
// app.use(cors());

// // Sử dụng body-parser để phân tích cú pháp dữ liệu gửi lên
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/submit-feedback', (req, res) => {
//     const { name, feedback } = req.body;
//     // Xử lý dữ liệu phản hồi ở đây
//     console.log(`Tên: ${name}, Lời chúc: ${feedback}`);

//     const feedbackData = `Tên: ${name}\nPhản hồi: ${feedback}\n\n`;

//     // Lưu dữ liệu vào file 'feedback.txt'
//     fs.appendFile('feedbacks.txt', feedbackData, (err) => {
//         if (err) {
//             console.error('Lỗi khi lưu dữ liệu:', err);
//             return res.status(500).send('Đã có lỗi xảy ra khi lưu phản hồi.');
//         }

//         // Gửi phản hồi thành công chỉ một lần sau khi dữ liệu đã được lưu
//         res.send("Cảm ơn bạn đã gửi phản hồi!");
//     });
// });

// app.listen(3000, () => console.log('Server đang chạy tại http://localhost:3000'));

// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');  // Đảm bảo rằng fs đã được require
// const bodyParser = require('body-parser');

// const app = express();

// // Sử dụng CORS middleware
// app.use(cors());

// // Sử dụng body-parser để phân tích cú pháp dữ liệu gửi lên
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/submit-feedback', (req, res) => {
//     const { name, feedback } = req.body;
//     // Xử lý dữ liệu phản hồi ở đây
//     console.log(`Tên: ${name}, Lời chúc: ${feedback}`);

//     const feedbackData = {
//         name: name,
//         feedback: feedback
//     };

//     // Đọc dữ liệu hiện tại trong file JSON
//     fs.readFile('feedbacks.json', 'utf8', (err, data) => {
//         let feedbacks = [];
//         if (err) {
//             if (err.code === 'ENOENT') {
//                 // Nếu file chưa tồn tại, tạo một mảng trống
//                 feedbacks = [];
//             } else {
//                 console.error('Lỗi khi đọc file:', err);
//                 return res.status(500).send('Đã có lỗi xảy ra khi đọc phản hồi.');
//             }
//         } else {
//             // Nếu file tồn tại, parse dữ liệu JSON
//             feedbacks = JSON.parse(data);
//         }

//         // Thêm phản hồi mới vào mảng
//         feedbacks.push(feedbackData);

//         // Ghi lại dữ liệu vào file JSON
//         fs.writeFile('feedbacks.json', JSON.stringify(feedbacks, null, 2), (err) => {
//             if (err) {
//                 console.error('Lỗi khi lưu dữ liệu:', err);
//                 return res.status(500).send('Đã có lỗi xảy ra khi lưu phản hồi.');
//             }

//             // Gửi phản hồi thành công
//             res.send("Cảm ơn bạn đã gửi phản hồi!");
//         });
//     });
// });

// app.listen(3000, () => console.log('Server đang chạy tại http://localhost:3000'));

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-feedback', (req, res) => {
    const { name, feedback } = req.body;
    const feedbackData = `Tên: ${name}\nPhản hồi: ${feedback}\n\n`;

    try {
        // Ghi vào file synchronously để dễ kiểm tra
        fs.appendFileSync('/Users/truongmanhtuan/Library/CloudStorage/OneDrive-m7xr/code/HappyNewYear2025_friend/feedbacks.json', feedbackData);
        res.send("Cảm ơn bạn đã gửi phản hồi!");
    } catch (err) {
        console.error('Lỗi khi lưu dữ liệu:', err);
        res.status(500).send('Đã có lỗi xảy ra khi lưu phản hồi.');
    }
});

app.listen(3000, () => console.log('Server đang chạy tại http://localhost:3000'));