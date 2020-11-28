$(function () {

   /* $('#sing-up-button').on('click', function (e) {
        e.preventDefault();

        $('.red-text').remove();

        let data = {
            login: $('#email-sing-up').val(),
            name: $('#name-sing-up').val(),
            password: $('#password-sing-up').val(),
            passwordConfirm: $('#password-confirm-sing-up').val()
        };

        console.log(data)
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/api/registration'
        }).done(function (data) {
            if (data.status === 1) {
                console.log(data)
                $(location).attr('href', '/registration')

            }
            if (data.status === 2) {
                console.log(data.message);
                data.fields.forEach(function (item) {
                    $(item).addClass('invalid');
                    $(item).after(`<div class="red-text">${data.message}</div>`);
                })
            }

        }).fail(function (data) {
            M.toast({html: 'Ошибка регистрации!'});
        });

    });

    $('#sing-in-button').on('click', function (e) {
        e.preventDefault();
        $('.red-text').remove();

        let data = {
            login: $('#email-sing-in').val(),
            password: $('#password-sing-in').val()
        };

        console.log(data)
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/api/authentication'
        }).done(function (data) {
            if (data.status === 1) {
                console.log(data)
                $(location).attr('href', '/registration')
            }
            if (data.status === 2) {
                console.log(data);
                data.fields.forEach(function (item) {
                    $(item).addClass('invalid');
                    $(item).after(`<div class="red-text">${data.message}</div>`);
                })
            }
        }).fail(function (data) {
            console.log(data);
            M.toast({html: 'Ошибка авторизации!'});
        });

    });
*/
});