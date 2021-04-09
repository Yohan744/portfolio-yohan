//Client ID
//b600918ad9c1323133d431ba9885962856be10517ace52365c46d7c010418596

//Client Secret
//6e71f7a7bb2db384fe25edc8e7fb552864d9c770317ac9f852a0dd2b7c3fd068

//let code = 1eb8329a07648f48949c628497fb78dbf8c36a980e941764c998a966274d16d0

//{
//"access_token": "4983405655977b359076b5af88c10c35f118cdedd5849eb41aa0b87f856f9d8e",
//"token_type": "Bearer",
//"scope": "public",
//"created_at": 1615991990
//}


// Set the Access Token
//const accessToken = "4983405655977b359076b5af88c10c35f118cdedd5849eb41aa0b87f856f9d8e"

// Call Dribble v2 API
/*$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        if (data.length > 0) {
            $.each(data.reverse(), function(i, val) {
                $('#dribbbleShots').prepend(
                    '<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.normal +'" alt="image"/></a>'
                )
            })
        }
        else {
            $('#dribbbleShots').append('<p>No shots yet!</p>');
        }
    }
});*/

const shot = document.querySelector("#dribbbleShots")

const requestProjects = async () => {
    const locationApi = "https://portfolio-b1.herokuapp.com/"
    // const locationApi = "http://localhost:3000/"

    const response = await axios.get(`${locationApi}getProjectYohan`)


    try {
        console.log(response.data)
        const datas = response.data
        datas.forEach(data => {
            if (data.tags === "one") {
                shot.innerHTML += `<img src="${data.images.normal}" alt="image">`
            }
        })
    } catch (err) {
        console.log(err)
    }
}

requestProjects()