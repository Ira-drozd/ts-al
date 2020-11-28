
async function fetchComments() {
    try {
        // const response = await axios.get('https://quiz-react-8da08.firebaseio.com/quizzes.json')
        let response = await fetch('https://ts-aluminium.firebaseio.com/comments.json')
        let data = await response.json(); // читаем ответ в формате JSON
        const comments = []

        if (response.ok) {
            Object.keys(data).forEach((key) => {
                console.log(data[key])
                comments.push({
                    username: data[key].username,
                    text: data[key].text
                })
            })

            console.log(comments)
            createComments(comments)
        } else {
            throw new Error('Server wrong')
        }

    } catch (e) {
        console.log(e)
    }
}

fetchComments()

function createComments(comments) {
    if (comments.length) {
        comments.map(item => {
            console.log(item.username, item.text)
            $('.comments-section > .container').append(
                "<div class=\"row\">" + item.username + ' ' + item.text + "</div>"
            )

            /* .append("<div class=\"card light-blue darken-1\">\n " +
             "                   <div class=\"card-content white-text\">\n       " +
             "                 <span class=\"card-title\">Акция</span>\n          " +
             "              <p>Третий навес в подарок.</p>\n                    </div>\n                </div>")*/

        })
    }
}

$(document).ready(function () {
    //console.log('comments', comments)
    //console.log(news)


});
