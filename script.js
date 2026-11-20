const input = document.getElementById("taskInput")
const btn = document.getElementById("addTaskBtn")
const list = document.getElementById("taskList")

btn.addEventListener("click", () => {

    if (input.value.trim() === "") {
        alert("Digite uma tarefa")
        return
    }

    const newTask = document.createElement("li")
    newTask.textContent = input.value

    const btnDel = document.createElement("button")
    btnDel.textContent = "x"
    btnDel.classList.add("btnDel")

    btnDel.addEventListener("click", () => {
        newTask.remove()
    })

    newTask.appendChild(btnDel)

    list.appendChild(newTask)

    input.value = ""
})