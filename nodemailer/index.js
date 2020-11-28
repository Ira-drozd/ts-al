const express = require("express");
const bodyParser = require("body-parser");
const mailer = require("./nodemailer");

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});


app.post("/contacts", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);

    console.log(request.body)

    let tel = request.body.tel;
    let email = request.body.email;
    let message = request.body.message;

    const sendMessage = {
        to: `TSAluminium@yandex.by`,
        subject: `Сообщение от ${request.body.email}`, // Subject line
        //text: `Hello, this is just text ${request.body.email} ${request.body.password}`, // plain text body
        html: `
            <table><tbody>
    <tr style="background-color: #f8f8f8;">
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон:</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>${request.body.tel}</td>
    </tr>
    <tr style="background-color: #f8f8f8;">
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Email:</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>${request.body.email}</td>
    </tr>
    <tr style="background-color: #f8f8f8;">
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Сообщение:</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>${request.body.message}</td>
    </tr></tbody>
            </table>
            `}

    if (!tel || !email || !message) {
        const fields = [];
        if (!tel) fields.push('#send-tel');
        if (!email) fields.push('#send-email');
        if (!message) fields.push('#sens-message');

        response.json({
            status: 2,
            message: "Все поля должны быть заполнены",
            fields
        })
    } else if (!/.+@.+\..+/i.test(email)) {
        response.json({
            status: 2,
            message: "Некорректный email",
            fields: ['#send-email']
        })
    }else {
        mailer(sendMessage);
        response.json({
            status: 1,
            message: "ok"
        })

    }

});

module.exports = app