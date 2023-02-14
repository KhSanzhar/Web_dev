document.querySelector('#push').onclick = function () {
    if (document.querySelector('#new-task input').value.length == 0) {
        alert("Kindly Enter Task Name!!!!")
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#new-task input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    }
}