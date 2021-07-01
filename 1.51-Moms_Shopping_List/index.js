const submitBtn = document.getElementById("submit-button")
const myList = document.getElementById("list")

submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    const subItem = createSubItem(e)
    myList.appendChild(subItem)
})

function createSubItem(e){
    const newLi = document.createElement("li")
    var groceryItem = document.createElement("div")
    newLi.appendChild(groceryItem)
    var inputValue = document.getElementById("title").value
    groceryItem.textContent = inputValue
    const dropDownDelete = createDelete()
    newLi.appendChild(dropDownDelete)
    return newLi
    
}

function createDelete(){
    const dropDownDelete = document.createElement("button")
    dropDownDelete.textContent = "X"
    dropDownDelete.addEventListener("click", function(e){
        this.parentElement.remove()

    })
    return dropDownDelete
}