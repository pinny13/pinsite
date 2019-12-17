(() => {
  const container = document.querySelector(".to-field-container");
  const toField = container.querySelector(".to-field");

  toField.onkeydown = event => {
    if (event.keyCode === 13) {
      const content = toField.value;

      if (!content){
        return;
      }
      toField.value = "";

      const emailAddress = getEmailAddress(content);

      const span = document.createElement("span");
      span.className = "email";
      span.setAttribute("data-email", emailAddress);
      span.innerHTML = emailAddress;

      const closingSpan = document.createElement("span");
      closingSpan.className = "close";
      closingSpan.onclick = () => {
        container.removeChild(span);
      };
      span.appendChild(closingSpan);
      container.insertBefore(span, toField);
    }

    function getEmailAddress(content) {
      /*
      const xht = new XMLHttpRequest();
      xht.open("GET", "http://apiurl.com");
      xht.onreadystatechange = () => {};
      xht.send();
      */
      return content;
    }
  };
})();
