baguetteBox.run('.gridContainer');

let inputLog = document.getElementById("search");

// (2)Add Event Listener (KeyUp)
inputLog.addEventListener('keyup', searchImage);

function searchImage() {
    filterValue = document.getElementById("search").value.toLowerCase()

    const anchors = document.querySelectorAll('a');

    for (i = 0; i < anchors.length; i++) { 
        let captions = anchors[i].getAttribute("data-caption").toLowerCase();
        let filter = captions.includes(filterValue);//Includes() Returns True or False
        
        if (filter === true) {
            anchors[i].style.display = 'block';
          } else {
              anchors[i].style.display = 'none';
          };
    };
};