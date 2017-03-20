$('#app').html(`

<div class="progress">
      <div class="indeterminate"></div>
  </div>

`);


setTimeout(function(){
x();
},3000);


function x(){
$.ajax({
url: "http://www.omdbapi.com/?t=Curse of Chucky"
}).done(function(res){
console.log(res);
let html = `
<h1>${res.Title}</h>
<h3>${res.Plot}</h3>
<img src="${res.Poster}"/>
`;

$('#app').html(html);

});
}