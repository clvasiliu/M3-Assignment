// Request user input for language and force lower case to allow matching
const sLangSelect = prompt('Please input a language code (\'es\', \'de\', \'en\', and \'fr\'): ').toLowerCase();

// Default string start
let sStringBuilder = 'Hello World translated in ';

// check language matches and construct translation string
// if invalid input, default to english translation
if (sLangSelect === 'es') {
    sStringBuilder += 'Spanish is: Hola Mundo';
} else if (sLangSelect === 'de') {
    sStringBuilder += 'German is: Hallo Welt';
} else if (sLangSelect === 'en') {
    sStringBuilder += 'English is: Hello World';
} else if (sLangSelect === 'fr') {
    sStringBuilder += 'French is: Bonjour le monde';
} else {
    // Defaulting to english
    sStringBuilder += 'English is: Hello World';
}

// output to document and log to console (instructions state log to console window?)
document.write(sStringBuilder);
console.log(sStringBuilder);

