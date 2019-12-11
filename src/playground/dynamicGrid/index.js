const elClicker = document.querySelectorAll(".clicker");

elClicker.forEach(e =>
  e.addEventListener("click", () => {
    const row = e.parentElement;
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    div1.setAttribute('class', 'cell');
    div2.setAttribute('class', 'cell');
    row.insertBefore(div1, e);
    row.insertBefore(div2, e);
    row.classList.remove("init");
    row.classList.add('updated');
  })
);
