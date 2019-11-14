(() => {
  // Elements and attributes
  const eContainer = document.querySelector(".container");
  const eDays = document.querySelector(".days");
  const eYearMonth = document.querySelector(".yearMonth");

  const attrCurrentYear = "data-year";
  const attrCurrentMonth = "data-month";
  const attrCurrentDate = "data-date";

  const prevYear = () => {
    const year = +eContainer.getAttribute(attrCurrentYear) - 1;
    eContainer.setAttribute(attrCurrentYear, year);
    const month = +eContainer.getAttribute(attrCurrentMonth);
    eYearMonth.innerHTML = setupDayDivs(year, month);
    displayDate();
    setupDayDivs();
  };
  const prevMonth = () => {
    let year = +eContainer.getAttribute(attrCurrentYear);
    let month = +eContainer.getAttribute(attrCurrentMonth) - 1;
    if (month < 0) {
      month = 11;
      year--;
    }
    eContainer.setAttribute(attrCurrentYear, year);
    eContainer.setAttribute(attrCurrentMonth, month);
    displayDate();
    setupDayDivs();
  };
  const nextYear = () => {
    const year = +eContainer.getAttribute(attrCurrentYear) + 1;
    eContainer.setAttribute(attrCurrentYear, year);
    const month = +eContainer.getAttribute(attrCurrentMonth);
    displayDate();
    setupDayDivs();
  };
  const nextMonth = () => {
    let year = +eContainer.getAttribute(attrCurrentYear);
    let month = +eContainer.getAttribute(attrCurrentMonth) + 1;
    if (month > 11) {
      month = 0;
      year++;
    }
    eContainer.setAttribute(attrCurrentYear, year);
    eContainer.setAttribute(attrCurrentMonth, month);
    displayDate();
    setupDayDivs();
  };

  const displayDate = () => {
    const year = +eContainer.getAttribute(attrCurrentYear);
    const month = +eContainer.getAttribute(attrCurrentMonth) + 1;
    eYearMonth.innerHTML = `${year} / ${month}`;
  };

  const setupDayDivs = () => {
    const year = +eContainer.getAttribute(attrCurrentYear);
    const month = +eContainer.getAttribute(attrCurrentMonth);

    // TODO: IMPLEMENT ME!
    console.log(`Populate day divs for: ${year} / ${month}`);
  };
  const displaySelectedDate = () => {};

  const addListener = (selector, listener) => {
    const elem = document.querySelector(selector);
    elem.addEventListener("click", listener);
  };

  const init = () => {
    // Create 35 divs for days
    for (let i = 0; i < 35; i++) {
      const eDay = document.createElement("div");
      eDays.appendChild(eDay);
    }

    // Set current date as the date of the picker
    const now = new Date();
    eContainer.setAttribute(attrCurrentYear, now.getFullYear());
    eContainer.setAttribute(attrCurrentMonth, now.getMonth());
    displayDate();

    //Populate 35 divs with date as of today's month and attach event handlers
    setupDayDivs();

    // Attach event handler to controls
    addListener(".prevYear", prevYear);
    addListener(".prevMonth", prevMonth);
    addListener(".nextYear", nextYear);
    addListener(".nextMonth", nextMonth);
  };

  init();
})();
