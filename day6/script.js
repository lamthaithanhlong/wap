console.log(location.search)
const q = new URLSearchParams(location.search)
console.log(q.get('name'), q.get('value'))