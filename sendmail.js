$(document).ready(() => {
    $('#sendmail').on('click', () => {
        console.log('sendmail');
        var mailEntries = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };
        console.log(mailEntries);
        var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (mailEntries.name == "" || mailEntries.email == "" || (mailEntries.email).match(pattern) == null) {
            $('#sent').hide();
            $('#warning').show();
            console.log('Warning');
        } else {
            $('#warning').hide();
            $('#sent').show();
            console.log('Sent');
            sendToserver(mailEntries);
            $('.modal').modal('hide');
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }
    });
});

const sendToserver = function(data) {
    //var ip = '172.16.0.104'; //macbook home IP
    var ip = '34.242.179.249'; // aws devserver IP
    var port = 8004;
    var url = 'http://' + ip + ':' + port;
    console.log(url);

    $.ajax({
        origin: '*',
        datatype: 'text/plain',
        method: 'POST',
        contentType: 'text/plain',
        data: JSON.stringify(data),
        url: url,
        success: function(data, textStatus, jQxhr) {
            console.log(data, textStatus, jQxhr);
        },
        error: function(data, textStatus, error) {
            console.log(data, textStatus, error);
        }
    });
};