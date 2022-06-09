// back tick `


const p = document.createElement("p");
// const node = document.createTextNode("This is new.");
// p.appendChild(node);
// const element = document.getElementById("blocks");
// element.appendChild(p);
// const $emoji = document.getElementById('blocks')


// p.innerText = "This is a paragraph";
// document.body.appendChild(p);

// $emoji.innerHTML = emoji.join('');

// const p = document.getElementById('blocks');

const emoji = []


for (let j = 129408; j <= 129458; j++) {
    let emojicode = (`&#${j};`);
    emoji.push(`<div class="blocks">${j}</div>`)

    // for(let i = 1; i <= j; i++) {
    //     console.log(`&#${i};`);
    // }

    emoji.push(`</div>`)
}

console.log(emoji)

emoji.innerHTML += emoji.join('')

console.log(emoji.innerHTML)


// if (typeof $main !== 'undefined' && typeof $main != null && typeof blocks === 'object') {
//     $main.innerHTML = blocks.join('')
// }

// const $emoji = document.createElement("p")
// $emoji.innerHTML = emoji.join('')




