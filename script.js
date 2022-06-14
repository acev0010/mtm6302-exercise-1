
const $content = document.getElementById('content')
const content=[]



// for loop utilized to define {i}

for(let i = 127799 ; i <= 127852; i++)
{
    content.push(`
     <div class="content">
        <div class="code">&#${i}</div>
        <div class="num">${i}</div>
    </div>
    `)
}



$content.innerHTML = content.join('')

