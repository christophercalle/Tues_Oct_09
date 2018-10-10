let TextBox = document.getElementById('TextBox')
let addButton = document.getElementById('addButton')
let pendingTask = document.getElementById('pendingTask')
let completedTask = document.getElementById('completedTasks')
let deleteButton = document.querySelector(".deleteButton")


addButton.addEventListener('click', function() {
let taskName = TextBox.value
let taskDiv = `
 <div class="pendingTaskDiv">
<input class="inputText" type="checkbox" onclick="completedItem(this)"></input>
<label>${taskName}</label>
<button class="deleteButton" onclick="removeItem(this)">Remove</button>
</div> `
// pendingTask.appendChild(taskDiv)
pendingTask.insertAdjacentHTML('beforeend',taskDiv)
})


function completedItem(checkbox){
  completedTask.appendChild(checkbox.parentElement)

  if(checkbox.checked == false){
    pendingTask.appendChild(checkbox.parentElement)
  }
}


function removeItem(item) {
  if(item.parentElement.parentElement == pendingTask){
    pendingTask.removeChild(item.parentElement)
  } else if(item.parentElement.parentElement == completedTask){
    completedTask.removeChild(item.parentElement)
  }
}

