// let text = "Sample text with email addresses: john@example.com, jane@example.com, $#@example.com"
// let regrex = /[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[a-zA-Z0-9]/g
// let text = "Sample text with phone numbers: (123) 456-7890, (987) 654-3210"
// let regrex = /\(\d{3}\)\s\d{3}\-\d{4}/g
// let text = "Sample text with URLs: http://example.com, https://www.example.com"
// let regrex = /[h-t]+\:+\/+\/+[^\s]+\.+[a-z]{3,}/g
// let text = "Sample sentence with words. Here are some words: hello, world!"
// let regrex = /\b\w+\b/g
// let text = "Sample text with dates: 01/01/2022, 12/31/2023"
// let regrex = /\d{2}\/\d{2}\/\d{4}/g
// let text = "Sample text with color codes: #FF0000, #00FF00, #0000FF";
// let regrex = /\#[A-F0-9]{6}/g
// let text = "Sample sentence with words starting with A: Apple, animal, Another"
// let regrex = /\b[Aa]\w+\b/g
// let text = "Sample text with social security numbers: 123-45-6789, 987-65-4321"
// let regrex = /\d{3}\-\d{2}\-\d{4}/g

let string = text.match(regrex)
console.log(string)


