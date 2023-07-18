日 = (e, n) => new Date(e, n, 1).getDay();
古 = (e, n, a) => new Date(e, n, a) < Date.now();
隠 = _ => 面 && (面.innerHTML = "");
獲 = _ => fetch("cal.json").then(response => response.json()); // Fetch the calendar data from cal_dat.json
設 = (e, n) => {(文 = 書[找]("cmy")) && (文.innerHTML = 12 * e + n + 1);};
判断 = (event, targetElement) => {
  let clickInside = false;
  if (event.target === targetElement || targetElement.contains(event.target)) {
    clickInside = true;
  }
  return clickInside;
};
显示事件 = async (c, evi) => {
  const defaultDisplay = `
    <img src="${c.description.img}" width="200px" style="margin-top:10px;"></img>
    <br> <strong>${c.description.title}</strong>
    <br> ${Object.values(c.description.bullets).map(bullet => `- ${bullet}<br>`).join("")}
  `;
  if (c && c.description) {
    try {
      const response = await fetch(`cal.json/${c}`); // Update the fetch URL here
      if (!response.ok) throw new Error("Cannot find description");
      evi.innerHTML = defaultDisplay;
    } catch (error) {
      evi.innerHTML = defaultDisplay;
    }
  }
  evi.style.display = evi.style.display === "none" ? "block" : "none"; // Toggle the display
};

造 = async (e, n, a, s) => {
  let d = 書[元]("div"),
    i = 日(a, s),
    evi = 書[找]("evi");
  d[名] = "cc";
  Array.from({ length: i }).forEach(() => d.appendChild(Object.assign(書[元]("div"), { [名]: "cd empty" })));
  Array.from({ length: n }, (_, n) => n + 1).forEach(n => {
    let o = 書[元]("div"),
      c = e[`${a}-${(s + 1 + "").padStart(2, "0")}-${(n + "").padStart(2, "0")}`],
      t = new Date(a, s, n).setHours(0, 0, 0, 0) == 初.setHours(0, 0, 0, 0);
    o[名] = `cd ${t && c ? `event-${c.type}` : 古(a, s, n) ? "past " + `past-event-${c?.type}` : ""} ${t ? "today" : ""}`;
    o.innerHTML = n;
    o.onclick = () => 显示事件(c, evi);
    d.appendChild(o);
  });
  return d;
};
面 = null;
初 = new Date(); // This now always represents today's date
表示 = new Date(); // This new object will represent the displayed date
元 = "createElement"; // DOM Element Variable
名 = "className"; // DOM Element Variable
找 = "getElementById"; // DOM Element Variable
旧 = (書 = document)[找]("pm"); // Previous Month
新 = 書[找]("nm"); // Next Month
(更 = async e => {
  表示.setMonth(表示.getMonth() + e); // Adjust the displayed month
  年 = 表示.getFullYear(); // Get the year of the displayed month
  月 = 表示.getMonth(); // Get the displayed month
  数 = new Date(年, 月 + 1, 0).getDate(); // Get the number of days in the displayed month
  設(年, 月); // Update the displayed year and month
  根 = 書[找]("ca"); // Get the calendar element
  根.innerHTML = ""; // Clear the calendar container
  const calendarData = await 獲(); // Fetch the calendar data
  根.appendChild(await 造(calendarData, 数, 年, 月)); // Append the newly generated month to the calendar container
})(0); // Immediately invoke the function with 0, causing the current month to be displayed.
旧.onclick = _ => 更(-1); // Go to Previous Month
新.onclick = _ => 更(1); // Go to Next Month
document.addEventListener('click', event => {
  const evi = 書[找]("evi");
  if (evi.style.display === "block" && !判断(event, evi)) {
    evi.style.display = "none";
  }
});