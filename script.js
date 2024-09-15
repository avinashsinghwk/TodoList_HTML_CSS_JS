let dataPlacer = () => {
    document.querySelector("tbody").innerHTML = ''
    let str = ''
    let listArray = JSON.parse(localStorage.getItem("todo"))
    listArray.forEach((element, index) => {
        str = `<tr> <td>${index + 1}</td> <td>${element[0]}</td><td>${element[1]}</td><td><button id="item_btn${index}" class="button item_btn" onclick="deleter(Number.parseInt(this.id.charAt(id.length - 1)))">Delete</button></td></tr>`
        document.querySelector("tbody").innerHTML += str
    });
}

let deleter = (id_num) => {
    let listArray = JSON.parse(localStorage.getItem("todo"))
    listArray.splice(id_num, 1)
    localStorage.setItem("todo", JSON.stringify(listArray))
    dataPlacer()
}

let checker = () => {
    let tit_val = document.getElementById("title").value.trim()
    let des_val = document.getElementById("description").value.trim()
    if (tit_val == '' || des_val == '') {
        return false
    }
    return true
}

let listUpdater = () => {
    let tit_val = document.getElementById("title").value.trim()
    let des_val = document.getElementById("description").value.trim()
    let listArray = JSON.parse(localStorage.getItem("todo"))
    listArray.push([tit_val, des_val])
    localStorage.setItem("todo", JSON.stringify(listArray))
}

if (localStorage.getItem("todo") == null) {
    localStorage.setItem("todo", "[]")
} else {
    dataPlacer();
}

document.getElementById("form_btn").onclick = (e) => {
    e.preventDefault()
    if (checker()) {
        listUpdater()
        dataPlacer()
    }
    else {
        alert("Fill the data carefully")
    }
    document.getElementById("title").value = ''
    document.getElementById("description").value = ''
}