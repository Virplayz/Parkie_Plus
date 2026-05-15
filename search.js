document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
    }
});

function search() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var boxes = document.getElementsByClassName('box');

    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        var boxName = box.id.toLowerCase();

        if (boxName.includes(input)) {
            box.style.display = "block";  // Show the box if it contains the search input
        } else {
            box.style.display = "none"; // Hide the box if it doesn't match
        }
    }
}
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));
