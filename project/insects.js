function insectsLoad(){
    fetch('https://spreadsheets.google.com/feeds/list/1D6SsLsIU3vL_Fhb4EA43OKTbJ30Se06h9t9pN4DdzhM/od6/public/values?alt=json').then(resp=>resp.json()).then(data=>{
        data = data['feed']['entry'];
        data.forEach(insect=>{
              root.innerHTML += `
              <div class="card" style="width: 18rem;">
          <img src="${insect.gsx$image.$t}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${insect.gsx$name.$t} </h5>
              <p class="card-text">Ловушку выставлять на высоте ${insect.gsx$hight.$t} м над землей</p>
              <a href="#" class="btn btn-primary">Рассчитать количество ловушек</a>
          </div>
          </div>`;  
          });  
        
        console.log(data);
    });
}

// function fetchTxt(){
//     fetch('https://spreadsheets.google.com/feeds/list/1D6SsLsIU3vL_Fhb4EA43OKTbJ30Se06h9t9pN4DdzhM/od6/public/values?alt=json').then(resp => resp.text()).then(data=> console.log(data));
// }
