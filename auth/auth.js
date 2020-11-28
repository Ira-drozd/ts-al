const express = require('express');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt-nodejs');
//db
//  const models = require('../models');
/*const User = require('../models/user');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json())

// POST is authorized
app.post("/api/registration", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body)

    const login = request.body.login;
    const name = request.body.name;
    const password = request.body.password;
    const passwordConfirm = request.body.passwordConfirm;

    if (!login || !name || !password || !passwordConfirm) {
        const fields = [];
        if (!login) fields.push('#email-sing-up');
        if (!name) fields.push('#name-sing-up');
        if (!password) fields.push('#password-sing-up');
        if (!passwordConfirm) fields.push('#password-confirm-sing-up');

        response.json({
            status: 2,
            message: "Все поля должны быть заполнены",
            fields
        })
    } else if (!/.+@.+\..+/i.test(login)) {
        response.json({
            status: 2,
            message: "Некорректный email",
            fields: ['#email-sing-up']
        })
    } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
        response.json({
            status: 2,
            message: "Только латинские буквы и цифры",
            fields: ['#password-sing-up','#password-confirm-sing-up']
        })
    } else if (password.length < 5 || password.length > 16) {
        response.json({
            status: 2,
            message: "От 5 до 16 символов",
            fields: ['#password-sing-up','#password-confirm-sing-up']
        })

    } else if (password !== passwordConfirm) {
        response.json({
            status: 2,
            message: "Пароли не совпадают",
            fields: ['#password-sing-up','#password-confirm-sing-up']
        })
    } else {

        bcrypt.hash(password, null, null, (err, hash) => {
            User.create({
                login,
                name,
                password: hash
            })
                .then(user => {
                    console.log(user);
                    request.session.userId = user.id;//
                    request.session.userLogin = user.login;//
                    request.session.userName = user.name;//
                    response.json({
                        status: 1,
                        message: "ok"
                    })
                })
                .catch(err => {
                    console.log(err);
                    response.json({
                        ok: false,
                        error: 'Error database!'
                    });
                });
        });


    }


});

// POST is authenticated
app.post("/api/authentication", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body)

    const login = request.body.login;
    const password = request.body.password;

    if (!login) {
        response.json({
            status: 2,
            message: "Заполните все поля",
            fields: ['#email-sing-in','#password-sing-in']
        })
    } else {

        User.findOne({
            login
        })
            .then(user => {
                if (!user) {
                    response.json({
                        status: 2,
                        message: "Неверный логин или пароль",
                        fields: ['#email-sing-in','#password-sing-in']
                    });
                } else {
                    bcrypt.compare(password, user.password, function (err, result) {
                        if (!result) {
                            response.json({
                                status: 2,
                                message: "Неверный логин или пароль",
                                fields: ['#email-sing-in','#password-sing-in']
                            });
                        } else {
                            request.session.userId = user.id;//
                            request.session.userLogin = user.login;//
                            request.session.userName = user.name;//

                            response.json({
                                status: 1,
                                message: "Auth ok"
                            });
                        }
                    });
                }
            })
            .catch(err => {
                console.log(err);
                response.json({
                    ok: false,
                    error: 'Ошибка, попробуйте позже!'
                });
            });

    }


});


module.exports = app;*/
