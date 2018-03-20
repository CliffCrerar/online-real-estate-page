$(document).ready(() => {
    $('#sendmail').on('click', () => {
        console.log('sendmail');
        var mailEntries = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };
        console.log(mailEntries);
    });
});