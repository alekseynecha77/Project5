baguetteBox.run('.grid');

let inputLog = document.getElementById("search");

inputLog.addEventListener('keyup', searchImage);

function searchImage() {
    filterValue = document.getElementById("search").value.toLowerCase()

    const anchors = document.querySelectorAll('a');

    for (i = 0; i < anchors.length; i++) { 
        let captions = anchors[i].getAttribute("data-caption").toLowerCase();
        let filter = captions.includes(filterValue);
        
        if (filter === true) {
            anchors[i].style.display = 'grid';
          } else {
              anchors[i].style.display = 'none';
          };
    };
};