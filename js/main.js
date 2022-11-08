$.ajax("https://jsonplaceholder.typicode.com/users")
    .done(function (users) {
        renderUsers(users);
    })


function renderUsers(users) {
    let table = $('<table></table>').addClass('styled-table').appendTo( "body" );

    let headers = $('<tr></tr>').appendTo( "table" );

    $.each(users[0], function (key, _) {
        let title = $('<th></th>').text(key.toUpperCase());
        $(headers).append(title);
    })

    table.append(headers)

    $.each(users, function (_, user)  {
        let tr = $('<tr></tr>')
        $.each(user, function (key, value) {
            let td = $('<td></td>')
            if(key === 'address'){
                td.text(value.city)
            }else if (key=== 'company'){
                td.text(value.name)
            }else {
                td.text(value)
            }
            tr.append(td)
        })
        table.append(tr)
    })
}