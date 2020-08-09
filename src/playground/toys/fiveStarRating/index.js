(() => {
  const onStarClick = (rcEl, starEl) => {
    const rcIdVal = rcEl.id.split('_')[1];
    const starClass = starEl.getAttribute("class").split(" ")[1];
    const starVal = +starClass.split('star')[1];

    const rv = document.getElementById('rv_'+rcIdVal);
    rv.querySelector('span').innerHTML = starVal;

    //httpClient.updateRating(rcIdVal, starVal);
    rcEl.querySelectorAll('.star').forEach(starSpan => {
        const starSpanVal = +starSpan.getAttribute('class').split(' ')[1].split('star')[1];
        if (starVal >= starSpanVal) {
            starSpan.classList.add('selected')
        } else {
            starSpan.classList.remove('selected');
        }
    });
  };

  const ratingContainers = document.querySelectorAll(".rating-container");

  ratingContainers.forEach(rc => {
    const stars = rc.children;
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      star.onclick = () => onStarClick(rc, star);
    }
  });
})();
