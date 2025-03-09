let innerCursor = document.querySelector(".Inner-cursor")
let outerCursor = document.querySelector(".Outer-cursor")


document.addEventListener("mousemove", Movecursor)

function Movecursor(e){
    let x = e.clientX
    let y = e.clientY
    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
}