document.getElementById("hamburger").addEventListener("click", toggleNavLinks);

function toggleNavLinks() {
  const element = document.getElementById("nav-links");
  // element.style.display = 'flex';


  let display = document.getElementById('nav-links').style.display;

  if (display.length === 0 || display === 'none') {
    
    element.style.display = 'flex';
  } else {
    element.style.display = 'none';
    
  }
}







let filterButtons = document.querySelectorAll("button.filter-button");

filterButtons.forEach(filterButton => {
  filterButton.addEventListener('click', function() {
    toggleActive (filterButton.innerHTML);
    

    if (filterButton.innerHTML === 'All') {
      addGalleryCard25()
      changeGalleryColumn(500)
      changeGalleryCard25(25,25)
      changeGalleryCard50(50,50)
    } else {
      removeGalleryCard25()
      changeId50() 
      changeGalleryColumn(350)
      changeGalleryCard25(0,0)
      changeGalleryCard50(100,100)
    }
    
  })
});



function toggleActive (name){
  
  let filterButtons = document.querySelectorAll("button.filter-button");
  
  filterButtons.forEach(filterButton => {
    
        filterButton.classList.remove('active')

      
        if(filterButton.innerHTML === name) {
          filterButton.classList.add('active')
        }
  });


}



function changeId50() {
  
  let galleryCard50 = document.querySelectorAll(".gallery-column .gallery-card-50");
  galleryCard50[0].id = "C3-50-13";
  galleryCard50[1].id = "C4-50-14";
  galleryCard50[2].id = "C4-50-15";
  galleryCard50[3].id = "C4-50-16";
}


function removeGalleryCard25() {
  let galleryCard25 = document.querySelectorAll(".gallery-column .gallery-card-25");
  
  
  galleryCard25.forEach(galleryCard25 => {  
    galleryCard25.classList.add('none')
  });
}





function addGalleryCard25() {
  let galleryCard25 = document.querySelectorAll(".gallery-column .gallery-card-25");
  galleryCard25.forEach(galleryCard25 => {  
    galleryCard25.classList.remove('none')
  });
}


function changeGalleryColumn(height){
  let galleryCard25 = document.querySelectorAll(".gallery-column");
  galleryCard25.forEach(galleryCard25 => {  
    galleryCard25.style.height = `${height}px`;
  });
}

function changeGalleryCard25(flex,maxHeight){
  let galleryCard25 = document.querySelectorAll(".gallery-column .gallery-card-25");
  galleryCard25.forEach(galleryCard25 => {  
    galleryCard25.style.flex = `${flex}%`;
    galleryCard25.style.maxHeight =`${maxHeight}%` ;
  });
}

function changeGalleryCard50(flex, maxHeight){
  let galleryCard50 = document.querySelectorAll(".gallery-column .gallery-card-50");
  galleryCard50.forEach(galleryCard50 => {  
    galleryCard50.style.flex = `${flex}%`;
    galleryCard50.style.maxHeight = `${maxHeight}%`;
  });
}





function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


console.log(document.querySelectorAll(".gallery-column"));

console.log('Width:  ' +  getWidth() );



// function get_text() 
// {
//   var buttons = document.getElementsByClassName('filter-button');
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function () {
//       console.log('Button ' + this.innerText + ' clicked');
//     }
//   }
// } // ends get_text function




