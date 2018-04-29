var apiCall = {
    getImages(){
        var url = "https://hackathon.philamuseum.org/api/v0/collection/object?query=34120&api_token=8dP6ovY0qpRjI7v4Ljs23RykaOWWzbT15i8kPr2in3bPwgNadjK06287MjUa";
        return fetch(url).then((res) => res.json());
    }
}

module.exports = apiCall;