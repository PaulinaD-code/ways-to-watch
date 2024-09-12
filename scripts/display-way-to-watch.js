import { 
  waysToWatch,
  findMatchingOffer
 } from "./data/way-to-watch-offer.js";

 /*
function displayWayToWatchButtons(){
  let html = '';

  waysToWatch.forEach((way)=>{
     html += `
       <div class="way-to-watch-subcontainer 
       js-way-to-watch-subcontainer
       js-way-to-watch-subcontainer-${way.id}"
       data-way-id="${way.id}">
          <div class="visible--img" id="visible1"> <img src=${way.image} class="watch--img" alt="" /> </div>
          <div class="active--hidden-img" id="active1"> <img src=${way.imageActive} class="watch--img" alt="" /> </div>
          <div class="way">${way.title}</div>  
      </div>    
    `
    document.querySelector('.js-way-to-watch-container').innerHTML = html;

    document.querySelectorAll('.js-way-to-watch-subcontainer')
      .forEach((container)=>{
        container.addEventListener('click', ()=>{
          let wayId = container.dataset.wayId;
          const matchingOffer = findMatchingOffer(wayId);
          matchingOffer.showOffer();       
        })
      })
  })
}*/

function displayWayToWatchButtonsIds(offerId){
  let html = '';
  const matchingOffer = findMatchingOffer(offerId);

     waysToWatch.forEach((way)=>{
    if(way === matchingOffer){
      html += `
      <div class="way-to-watch-subcontainer 
      js-way-to-watch-subcontainer
      way-to-watch-active"
      js-way-to-watch-subcontainer-${matchingOffer.id}"
      data-way-id="${matchingOffer.id}">
         <div class="visible--img"> <img src=${matchingOffer.imageActive} class="watch--img" alt="" /> </div>
         <div class="way">${matchingOffer.title}</div>  
      </div>    
   `
    }else{
      html += `
      <div class="way-to-watch-subcontainer 
      js-way-to-watch-subcontainer"
      js-way-to-watch-subcontainer-${way.id}"
      data-way-id="${way.id}" >
         <div class="visible--img"> <img src=${way.image} class="watch--img" alt="" /> </div>
         <div class="way">${way.title}</div>  
      </div>    
      `
    }

   document.querySelector('.js-way-to-watch-container').innerHTML = html;
   matchingOffer.showOffer();
     
   document.querySelectorAll('.js-way-to-watch-subcontainer')
      .forEach((container)=>{
        container.addEventListener('click', ()=>{
          let wayId = container.dataset.wayId;
          displayWayToWatchButtonsIds(wayId);    
        })
      })
  })
}

displayWayToWatchButtonsIds("01")


