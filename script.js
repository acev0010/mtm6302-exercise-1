
let emojiCount = 50
const emojiContent = document.getElementById("content")

for (let i = 128512; i < (128512 + emojiCount); i++)
{
    let emojiCode = `&#${i};`
    let emojiSpan = document.createElement('span')
    emojiSpan.style.fontSize = '5rem'
    emojiSpan.innerHTML += emojiCode

    let emojiCodeTag = document.createElement('code')
    emojiCodeTag.innerHTML += i
    emojiContent.appendChild(emojiSpan)
    emojiContent.appendChild(document.createElement('br'))
    emojiContent.appendChild(emojiCodeTag)
    emojiContent.appendChild(document.createElement('br'))
}
    