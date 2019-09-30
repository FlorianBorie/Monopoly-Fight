module.exports = {
    async httpGetRequest(url) {
        return fetch(url).then(response => response.json())
    },
    async httpPostRequest(url, body) {
        const data = new FormData();
        data.append("json", JSON.stringify(body))
            //console.log(body)

        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
                //body: JSON.stringify({ "firstname": "Romain", "lastname": "Vergé", "email": "romain.verge@ynov.com", "username": "toto", "age": "12" })
        }).then(response => response.json())
    },
    async httpDeleteRequest(url, body) {
        return fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(body)
        }).then(response => response.json())
    },
    async httpPatchRequest(url, body) {
        return fetch(url, {
            method: 'PATCH',
            body
        }).then(response => response.json())
    }
}