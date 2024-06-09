let title=document.querySelector("#title")
let container=document.querySelector('.container')
let form=document.querySelector('form')

function allTasks(){
    tasksArray.forEach((value,index)=>{
        let div=document.createElement('div')
        div.setAttribute("class","task")
        let innerDivision=document.createElement("div")
        div.append(innerDivision)
        let p=document.createElement("p")
        p.innerText=value.title
        innerDivision.append(p)

        let btn=document.createElement("button")
        btn.setAttribute("class", "deleteButton")
        btn.innerText='Remove'
        btn.addEventListener('click',()=>{
            removeTasks()
            tasksArray.splice(index,1)
            allTasks()
        })
        div.append(btn)
        container.append(div)
    })
}

function removeTasks(){
    tasksArray.forEach((value,index)=>{
        let div=document.querySelector(".task")
        div.remove()
    })
}
let tasksArray=[]
form.addEventListener("submit",(event)=>{
        event.preventDefault()
        removeTasks()
        tasksArray.push({
            title: title.value,
        })
        allTasks()
})
