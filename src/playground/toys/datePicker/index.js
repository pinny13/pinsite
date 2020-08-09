(() => {
  // Elements and attributes
  const eContainer = document.querySelector(".container");
  const eControls = document.querySelector(".controls");
  const eDays = document.querySelector(".days");
  const eYearMonth = document.querySelector(".yearMonth");

  const attrCurrentYear = "data-year";
  const attrCurrentMonth = "data-month";
  const attrCurrentDate = "data-date";

  const storeDisplayDate = (year, month) => {
    eControls.setAttribute(attrCurrentYear, year);
    eControls.setAttribute(attrCurrentMonth, month);
  };

  const getDisplayDate = () => {
    return {
      year: eControls.getAttribute(attrCurrentYear),
      month: eControls.getAttribute(attrCurrentMonth)
    };
  };

  const storeSelectedDate = (year, month, date) => {
    eContainer.setAttribute(attrCurrentYear, year);
    eContainer.setAttribute(attrCurrentMonth, month);
    eContainer.setAttribute(attrCurrentDate, date);
  };

  const getSelectedDate = () => {
    return {
      year: eContainer.getAttribute(attrCurrentYear),
      month: eContainer.getAttribute(attrCurrentMonth),
      date: eContainer.getAttribute(attrCurrentDate)
    };
  };

  const prevYear = () => {
    let { year, month } = getDisplayDate();
    year--;
    eYearMonth.innerHTML = setupDayDivs(year, month);
    storeDisplayDate(year, month);
    displayYearMonth();
    setupDayDivs();
  };
  const prevMonth = () => {
    let { year, month } = getDisplayDate();
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    storeDisplayDate(year, month);
    displayYearMonth();
    setupDayDivs();
  };
  const nextYear = () => {
    let { year, month } = getDisplayDate();
    year++;
    storeDisplayDate(year, month);
    displayYearMonth();
    setupDayDivs();
  };
  const nextMonth = () => {
    let { year, month } = getDisplayDate();
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    storeDisplayDate(year, month);
    displayYearMonth();
    setupDayDivs();
  };

  const displayYearMonth = () => {
    let { year, month } = getDisplayDate();
    month++;
    eYearMonth.innerHTML = `${year} / ${month}`;
  };

  const getNumOfMonthDays = date => {
    let result = 0;
    const month = date.getMonth();
    let currentMonth = month;
    while (currentMonth === month) {
      let currDate = date.getDate();
      date.setDate(currDate + 1);
      currentMonth = date.getMonth();
      result++;
    }
    return result;
  };

  const setupDayDivs = () => {
    //Clear previous days
    eDays.querySelectorAll("div").forEach(element => {
      element.innerHTML = "";
      element.className = "";
    });

    let { year, month } = getDisplayDate();
    let selectedYear = getSelectedDate().year;
    let selectedMonth = getSelectedDate().month;
    let selectedDate = getSelectedDate().date;

    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(1);
    const startDay = date.getDay();
    const numOfMonthDays = getNumOfMonthDays(date);

    for (let i = startDay, d = 1; d <= numOfMonthDays; i++, d++) {
      const eDay = eDays.children[i];
      eDay.innerHTML = d;
      eDay.addEventListener("click", () => {
        storeSelectedDate(year, month, d);

        displaySelectedDate();
        eDays
          .querySelectorAll("div")
          .forEach(element => (element.className = ""));

        eDay.className = "selected";
      });

      if (
        year === selectedYear &&
        month === selectedMonth &&
        d === +selectedDate
      ) {
        eDay.className = "selected";
      }
    }
  };
  const displaySelectedDate = () => {
    const year = +eContainer.getAttribute(attrCurrentYear);
    const month = +eContainer.getAttribute(attrCurrentMonth) + 1;
    const day = +eContainer.getAttribute(attrCurrentDate);

    document.querySelector(
      "#currentDate"
    ).innerHTML = `${month}/${day}/${year}`;
  };

  const addListener = (selector, listener) => {
    const elem = document.querySelector(selector);
    elem.addEventListener("click", listener);
  };

  const init = () => {
    // Create 35 divs for days
    for (let i = 0; i < 42; i++) {
      const eDay = document.createElement("div");
      eDays.appendChild(eDay);
    }

    // Set current date as the date of the picker
    const now = new Date();
    storeDisplayDate(now.getFullYear(), now.getMonth());
    displayYearMonth();

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
