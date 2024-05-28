const List = JSON.parse(localStorage.getItem("To-Do")) || []

function DeleteList(){
    const listElements = document.getElementsByTagName('li')
    for(i=0;i<listElements.length;i++){
        listElements[i].childNodes[2].addEventListener(
            "click",(e)=>{
                const listElement = e.target.parentNode
                listElement.remove()
                List.splice(listElement.dataset.key,1)

                if(List.length == 0){
                    renderLists()
                }
                else{
                    Save()
                }
            }
        )
    }
}

function CheckOut(){
    const listElements = document.getElementsByTagName('li')
    for(i=0;i<listElements.length;i++){
        listElements[i].childNodes[0].addEventListener(
            "change",(e)=>{
                const listElement = e.target.parentNode
                if(e.target.checked){
                    listElement.style.textDecoration = "line-through black 2px"
                    List[listElement.dataset.key].Completed = true
                    Save()
                }
                else{
                    listElement.style.textDecoration = "none"
                    List[listElement.dataset.key].Completed = false
                    Save()
                }
            }
        )
    }
}

document.getElementById("Lists").addEventListener(
    "click",(e)=>{
        console.log(e.target.tagName)
        if (e.target.tagName == "INPUT"){
            const listElement = e.target.parentNode
                if(e.target.checked){
                    listElement.style.textDecoration = "line-through black 2px"
                    List[listElement.dataset.key].Completed = true
                    Save()
                }
                else{
                    listElement.style.textDecoration = "none"
                    List[listElement.dataset.key].Completed = false
                    Save()
                }
        }
        if (e.target.tagName == "IMG"){
            const listElement = e.target.parentNode
                listElement.remove()
                List.splice(listElement.dataset.key,1)
                if(List.length == 0){
                    renderLists()
                }
                else{
                    Save()
                }
        }
    }
)
document.getElementById("Lists").ta
function addListItem(){
    const pri_button = document.getElementById("add-promt")
    const promt_field = document.getElementById("add-field")
    pri_button.style.display = "none"
    promt_field.style.display = 'inline-block'
    promt_field.children[0].focus()
    promt_field.children[1].addEventListener(
        "click",()=>{
            if(List,promt_field.children[0].value !== "" || null || undefined){
                List.push({task:promt_field.children[0].value,Completed:false})
                renderLists()
            }
            promt_field.children[0].value = ""
            promt_field.style.display = "none"
            pri_button.style.display = 'inline-block'
        })
    promt_field.children[0].addEventListener(
        "blur",(e)=>{
            if(e.target.value == ""){
                promt_field.style.display = "none"
                pri_button.style.display = 'inline-block'
            }
        }
    )
}


function renderLists(){
    function checkboxStatus(x){
        if(x){return 'Checked'}
        return ""
    }
    const ListContainer = document.getElementsByTagName("ul")[0]
    if (List.length == 0 ){
        ListContainer.innerHTML = "<h4>Add an Task</h4>"
    }
    else{
        ListContainer.innerHTML = ''
        List.forEach((x,i)=>{
            ListContainer.innerHTML += `<li data-key="${i}" class="${checkboxStatus(x.Completed)}"><input type="checkbox" ${checkboxStatus(x.Completed)}>${x.task}<img src="images/bin.png" alt="Delete" ></li>`
        })
        // DeleteList()
        // CheckOut()

    }
    Save()
}


function Save(){
    localStorage.setItem("To-Do",JSON.stringify(List))
}