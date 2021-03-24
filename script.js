let append = document.querySelector('.plus');
append.onclick = _ => {
    //  alert(document.getElementById('Info').value);
    if ((document.getElementById('Info').value).trim() === null || (document.getElementById('Info').value).trim() === "") {
        alert("sorry put value in this in put for append in you memory".toUpperCase());
    }
    else {
        Serachnull();
        let n = (document.getElementById('Info').value).toUpperCase()
        let items = search();
        console.log(items)
        for (var i = 0; i < items.length; i++) {
            if (items[i] === n) {
                alert(`Sorry this items is existe ${n} in your items`);
                return;
            }
        }
        let itemsAdd = document.createElement('div'),
            fristSpan = document.createElement('span'),
            LasteSpan = document.createElement('span');
        itemsAdd.className = 'item-data';
        fristSpan.className = 'Name';
        LasteSpan.className = 'Delete';
        fristSpan.textContent = (document.getElementById('Info').value).toUpperCase();
        LasteSpan.textContent = 'Delete'
        itemsAdd.appendChild(fristSpan);
        itemsAdd.appendChild(LasteSpan);
        document.querySelector('.all-items').appendChild(itemsAdd);
        document.getElementById('Info').value = "";
        document.querySelector('.Taske').textContent = (parseInt(document.querySelector('.Taske').textContent) + 1).toString();

    }
}
function search() {
    let arrayElementTaske = Array.from(document.querySelector('.all-items').children);
    let myItems = [];
    arrayElementTaske.forEach(e => {
        myItems.push(e.querySelector('.Name').textContent);
    })
    return myItems;
}
document.addEventListener('click', function (e) {
    if (e.target.className == 'Delete') {
        e.target.parentNode.remove();
        document.querySelector('.Taske').textContent = (parseInt(document.querySelector('.Taske').textContent) - 1).toString();
        if ((parseInt(document.querySelector('.Taske').textContent)) === 0) {
            // alert("hi");
            document.querySelector('.all-items').innerHTML = `<div id="NullItems" class="null" >
                You Not Have Any Item In your Table
            </div>`
        }
    }

});
function Serachnull() {
    let arrayElementTaske = Array.from(document.querySelector('.all-items').children);
    arrayElementTaske.forEach(e => {
        if (e.classList.contains('null')) {
            e.remove();
        }
    })


}
