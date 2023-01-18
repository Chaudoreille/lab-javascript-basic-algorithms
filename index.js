// Iteration 1: Names and Input
let hacker1 = "Arthur";
let hacker2 = "Arthur";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let spacedUpperCaseHacker1 = "";
let reversHacker2 = "";

for (let i = 0; i < hacker1.length; i++) {
    spacedUpperCaseHacker1 += hacker1[i].toUpperCase() + " ";
    reversHacker2 = hacker2[i] + reversHacker2; 
}

console.log(spacedUpperCaseHacker1);
console.log(reversHacker2);

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker2 > hacker1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum tempor tristique. Mauris sem dui, sagittis non libero ut, malesuada fringilla urna. In odio erat, faucibus eu mi at, consequat egestas ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam tincidunt est in ligula vehicula, ut sagittis odio sollicitudin. Aenean et libero arcu. Phasellus lacinia sollicitudin ipsum a tincidunt. Morbi id neque vitae sapien euismod dapibus vel et lorem. Vivamus sed pharetra ligula, sit amet elementum augue. Vestibulum at mi vel nulla fermentum elementum. Curabitur egestas erat accumsan quam blandit, id dictum nulla convallis. In scelerisque risus a ornare faucibus.
Cras tincidunt dictum nisl. Suspendisse tempor diam quis laoreet porta. Pellentesque placerat eget odio at euismod. Vestibulum at est sagittis, laoreet justo quis, accumsan dui. Nulla ac sapien et nulla pellentesque volutpat quis vitae turpis. Aenean ullamcorper dolor ut lacinia malesuada. Cras a varius erat, consectetur sodales justo. Mauris et elit tristique justo imperdiet vestibulum. Vestibulum lorem velit, ornare vitae sodales non, malesuada convallis dui. Mauris aliquam, lorem vel placerat laoreet, neque ligula posuere ex, in accumsan augue felis nec risus. Vestibulum eu leo quis elit egestas maximus. Pellentesque nec maximus nulla, eu fermentum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent volutpat facilisis ligula, id dignissim augue eleifend vitae. Aliquam dui nunc, fermentum nec eros quis, venenatis scelerisque dui.
Etiam tortor orci, sagittis non pulvinar in, venenatis vel mauris. Ut risus ante, euismod non posuere eu, molestie ut lacus. Morbi vitae augue nunc. Nullam ut risus elit. Nunc nec porta metus, vitae vehicula dui. Vestibulum eget mauris eros. Fusce ultricies sed magna et viverra. Morbi ut lorem eget enim viverra efficitur vitae ut erat. Suspendisse libero turpis, ultrices vel orci vitae, porta aliquet elit.`

let wordCount = 0;
let etCount = 0;
let word = "";

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphanum = alphabet + "0123456789";
alphabet += alphabet.toUpperCase();

for (let i = 0; i < longText.length; i++) {
    if (!alphabet.includes(longText[i])) {
        if (word.length) {
            if (word === "et") {
                etCount++;
            }
            wordCount++;
            word = "";
        }
    } else {
        word += longText[i];
    }
}

console.log(wordCount);
console.log(etCount);

// Bonus 2

let phrasesToCheck = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "stacks cats",
    "stac!!!! cats",
    "step on no pets",
    "s+t,e.p o$n n%o (pe)t*s",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon",
    "Some things are not meant to be palindroms",
    "11213651436587",
    "0123456789876543210",
    "12/21/33 12:21"
];

function isPalindrom(phrase) {
    let start = 0;
    let end = phrase.length - 1 ;
    phrase = phrase.toLowerCase();

    while (start < end) {
        while (!alphanum.includes(phrase[start])) {
            start++;
        }
        while (!alphanum.includes(phrase[end])) {
            end--;
        }

        if (phrase[start] !== phrase[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

for (index in phrasesToCheck) {
    phrase = phrasesToCheck[index];
    let predicate = isPalindrom(phrase);
    let color = predicate ? "\x1b[32m" : "\x1b[91m";
    console.log(`${color}"${phrase}" ${predicate ? "is" : "is not"} a palindrom \x1b[0m`);
}
