// back tick `

// let emojis = [129408, 129409, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
//     0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
//     0x1F431, 0x1F42A, 0x1F439, 0x1F424];


// const p = document.createElement("p");
// const collection = document.getElementsByClassName("block");
// collection[2].innerHTML = "&#129409;";


// const node = document.createTextNode("This is new.");
// p.appendChild(node);
// const element = document.getElementById("blocks");
// element.appendChild(p);

// p.innerText = "This is a paragraph";
// document.body.appendChild(p);

// $emoji.innerHTML = emoji.join('');

// const p = document.getElementById('blocks');

function loadEmojis ()

{


const emojiSection = document.createElement('div');
const emojis = document.createElement('p');

let emojiCount = 50

for (let j = 129409; j <= 129459; j++) {
    let emojiCode = `&#${j};`
    emojis.innerHTML += emojiCode
}
    
    
    // console.log(`&#${j};`);
    // emoji.push(`<div class="block"><span style="font-size: 5rem;"> (emojicode) </span><br></div>`)

    // for(let i = 1; i <= j; i++) {
    //     console.log(`&#${i};`);
    //     emoji.push(`<div class="blocks"></div>`)
    // }

    // emoji.push(`</div>`)
    // console.log(emojicode)

    emojiSection.appendChild(emojis)
    document.body.appendChild(emojiSection)

}

emoji.innerHTML += emoji.join('')

console.log(emoji.innerHTML)


if (typeof $main !== 'undefined' && typeof $main != null && typeof blocks === 'object') {
    $main.innerHTML = blocks.join('')
}

// const $emoji = document.createElement("p")
// $emoji.innerHTML = emoji.join('')




