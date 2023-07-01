console.log(location.search)
const q = new URLSearchParams(location.search)
console.log("GET result of search bar " + q.get('name'), q.get('value'))

function goBack() {
    history.back();
}