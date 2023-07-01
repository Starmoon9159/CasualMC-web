var i = 1;
var img = document.getElementById('news-img');

function handleSelect(elm) {
   window.location = "./SelectHtmls" + "/" + elm.value + ".html";
}

function nextIMG() {
   i++
   img.src = `../imgs/${i}.png`
   if (i > img_count) {
      i = 1
   }

}
function pastIMG() {
   if (i === 1) {
      i = img_count
   } else {
      i--
   } 
   img.src = `../imgs/${i}.png`

}