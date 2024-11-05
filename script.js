const mainDiv=document.querySelector('#main')
const cursor=document.querySelector('#cursor')
mainDiv.addEventListener('mousemove',(val)=>{
    cursor.style.left=val.x+'px'
    cursor.style.top=val.y+'px'
})