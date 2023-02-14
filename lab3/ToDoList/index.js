document.querySelector('#push').onclick = function () {
    if (document.querySelector('#new-task input').value.length == 0) {
        alert("Kindly Enter Task Name!!!!")
    }
}