const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'TSAluminium@yandex.by',
            pass: 'TriWkk9mTET9M99'
        }
    },
    {
        from: '"TSAluminium" <TSAluminium@yandex.by>'
    });

const mailer = function (message) {
    transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err);
        console.log('Email send', info)
    })
}

module.exports = mailer;