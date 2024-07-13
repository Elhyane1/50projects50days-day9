let buttons = document.querySelectorAll('.btn')
let sounds = document.querySelectorAll('audio')
let btnArray = []
for (let x of buttons){
    btnArray.push(x)
}

buttons.forEach(function(e, i){
    e.addEventListener('click', function(){
        sounds.forEach(function(e){
            e.pause()
        })
        sounds[i].play()
    })
})