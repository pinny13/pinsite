const eTabs = document.querySelector(".container>.tabs");
const eContents = document.querySelector(".container>.contents");

eTabs.addEventListener("click", e => {
  eTabs.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  const eTab = e.target;
  eTab.classList.add("active");
  const id = eTab.getAttribute("data-id");

  eContents
    .querySelectorAll(".content")
    .forEach(node => node.classList.remove("active"));

  let eContent = eContents.querySelector(`.content[data-id="${id}"]`);
  if (!eContent) {
    eContent = document.createElement("div");
    eContent.classList.add("content");
    eContent.setAttribute("data-id", id);
    eContents.appendChild(eContent);
    appendContent(id, eContent);
  }
  eContent.classList.add("active");
});

function appendContent(id, elem) {
  /*
const request = new XMLHttpRequest();
request.onreadystatechange = ()=>{
    if (request.readystate === XMLHttpRequest.DONE){
        //Do something with loaded data
    }
}
request.open('GET', 'http://someurl.com');
request.send();
*/

  const content = document.createTextNode(`This is content #${id}`);
  elem.appendChild(content);
}
