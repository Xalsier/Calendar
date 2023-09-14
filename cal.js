曜日 = ["日", "月", "火", "水", "木", "金", "土"]; // Weekdays in Kanji
当前CMY = new Date(); // Current year, month, and day
日 = (e, n) => new Date(e, n, 1).getDay();
古 = (e, n, a) => new Date(e, n, a) < Date.now();
隠 = _ => 面 && (面.innerHTML = "");
獲 = _ => fetch("https://cdn.jsdelivr.net/gh/Xalsier/nak_calendar/cal.json").then(response => response.json()); // Fetch the calendar data from cal_dat.json
const 更新图片 = async (年, 月) => {
  const calendarData = await 獲();
  
  // Extract events for the current month.
  const thisMonthEvents = Object.entries(calendarData)
                                .filter(([date]) => {
                                    const [eventYear, eventMonth] = date.split("-").map(Number);
                                    return eventYear === 年 && eventMonth === (月 + 1); 
                                })
                                .sort(([dateA], [dateB]) => Date.parse(dateB) - Date.parse(dateA)); // Sort in descending order

  // Find the most recent event with an image.
  const recentEventWithImage = thisMonthEvents.find(([, eventData]) => eventData.description.img && eventData.description.img.trim() !== "");

  const overlayImage = 書[找]("overlay-image-id");
  
  if (recentEventWithImage) {
      const eventData = recentEventWithImage[1];

      overlayImage.src = eventData.description.img;
      overlayImage.alt = eventData.description.title; 
      overlayImage.style.display = "block";

      const overlayImageLink = overlayImage.parentElement;
      if (overlayImageLink.tagName === "A") {
          overlayImageLink.href = eventData.description.twitterLink;
          overlayImageLink.target = "_blank"; 
          overlayImageLink.rel = "noopener noreferrer"; 
      }
  } else {
      overlayImage.style.display = "none";
      overlayImage.alt = ""; // Reset alt text if no image is present.
  }
};



設 = (e, n) => {(文 = 書[找]("cmy")) && (文.innerHTML = 12 * e + n + 1);};
判断 = (event, targetElement) => {
  let clickInside = false;
  if (event.target === targetElement || targetElement.contains(event.target)) {
    clickInside = true;
  }
  return clickInside;
};

const triviaModal = document.getElementById('triviaModal');
const closeBtn = document.getElementById('closeBtn');
const triviaContent = document.getElementById('triviaContent');
const languageList = document.getElementById('language-list');
const typingSpeed = 50;
const fallbackLanguage = 'en';
let desiredLanguage = languageList ? languageList.value : fallbackLanguage; 

function typeText(text, element) {
    let index = 0;
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    element.appendChild(cursor);
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            const char = document.createTextNode(text[index]);
            element.insertBefore(char, cursor);
            index++;
        } else {
            clearInterval(typingInterval);
            element.removeChild(cursor); // Remove cursor once typing is done
        }
    }, typingSpeed);
}

function getValidLanguage(triviaData) {
  // Check if desiredLanguage is valid and exists in trivia data
  if (desiredLanguage && triviaData.hasOwnProperty(desiredLanguage + '_trivia')) {
      return desiredLanguage;
  }
  console.warn(`Desired language '${desiredLanguage}' not found or invalid. Using fallback language '${fallbackLanguage}' instead.`);
  return fallbackLanguage;
}

function fetchTrivia() {
  if (!triviaContent) {
      console.warn("Unable to find triviaContent element. Skipping trivia fetch.");
      return; // Exit the function early if triviaContent doesn't exist
  }
  
  triviaContent.textContent = "";
  fetch('../json/trivia.json')
      .then(response => {
          if (!response.ok) {
              throw new Error("HTTP error " + response.status);
          }
          return response.json();
      })
      .then(triviaData => {
          const language = getValidLanguage(triviaData);  // Get valid language

          const triviaForLang = triviaData[language + '_trivia'];
          const randomTrivia = triviaForLang[Math.floor(Math.random() * triviaForLang.length)];
          setTimeout(() => {
              triviaModal.style.display = "block";
              triviaModal.style.opacity = "1";
              triviaModal.style.transform = "translate(-50%, -50%) scale(1)";
              typeText(randomTrivia, triviaContent);
          }, 100);
      })
      .catch(error => {
        console.error('Error fetching trivia:', error);
        typeText("Can't Fetch Trivia", triviaContent);
    });
    
}
fetchTrivia();  // Initial trivia fetch
languageList.addEventListener('change', function () {
    desiredLanguage = languageList.value;  // Update desired language
    fetchTrivia();  // Refresh trivia with new language
});

if (closeBtn) {  // Check if closeBtn exists
  closeBtn.addEventListener('click', function () {
      if (triviaModal) {  // Check if triviaModal exists
          triviaModal.style.transform = "translate(-50%, -50%) scale(0.8)";
          triviaModal.style.opacity = "0";
          setTimeout(() => {
              triviaModal.style.display = "none";
          }, 300);
      } else {
          console.warn("Unable to find triviaModal element. Skipping close button action.");
      }
  });
} else {
  console.warn("Unable to find closeBtn element. Event listener not added.");
}


显示事件 = async (c, evi) => {
  const overlayImage = 書[找]("overlay-image-id");
  
  if (c && c.description) {
      if (c.description.img && c.description.img.trim() !== "") {
          overlayImage.src = c.description.img;
          overlayImage.alt = c.description.title;
          overlayImage.style.display = "block";
      } else {
          await 更新图片(表示.getFullYear(), 表示.getMonth());
      }

      const overlayImageLink = overlayImage.parentElement;
      if (overlayImageLink.tagName === "A") {
          overlayImageLink.href = c.description.twitterLink || "#";
          overlayImageLink.target = "_blank";
          overlayImageLink.rel = "noopener noreferrer";
      }

      // Using trivia modal to type out the event's title.
      const triviaModal = document.getElementById('triviaModal');
      const triviaContent = document.getElementById('triviaContent');
      triviaContent.textContent = ""; // Clear the current content
      typeText(c.description.title, triviaContent); // Use the typeText function here
      triviaModal.style.display = "block";
      triviaModal.style.opacity = "1";
      triviaModal.style.transform = "translate(-50%, -50%) scale(1)";
  }
};

造 = async (e, n, a, s) => {
  let d = 書[元]("div"),
      i = 日(a, s),
      evi = 書[找]("evi");
  d[名] = "cc";
  曜日.forEach(day => {
    let weekdayDiv = 書[元]("div");
    weekdayDiv[名] = "weekday";
    weekdayDiv.innerHTML = day;
    d.appendChild(weekdayDiv);
});
  Array.from({ length: i }).forEach(() => d.appendChild(Object.assign(書[元]("div"), { [名]: "cd empty" })));
  Array.from({ length: n }, (_, n) => n + 1).forEach(n => {
    let o = 書[元]("div"),
        c = e[`${a}-${(s + 1 + "").padStart(2, "0")}-${(n + "").padStart(2, "0")}`],
        t = new Date(a, s, n).setHours(0, 0, 0, 0) == 初.setHours(0, 0, 0, 0);
    let classToAdd = 'cd'; // default class
    if (t && c) {
      classToAdd += ` today event-${c.type}`;
    } else if (t) {
      classToAdd += ` today`;
    }
    else if (古(a, s, n) && c) {
      classToAdd += ` past past-event-${c.type}`;
    } else if (古(a, s, n)) {
      classToAdd += ` past`;
    }
    else if (c) {
      classToAdd += ` event-${c.type}`;
    }
    o[名] = classToAdd;
    o.innerHTML = n;
    o.onclick = () => 显示事件(c, evi);
    d.appendChild(o);
  });
  return d;
};
面 = null;
初 = 当前CMY;
表示 = new Date(当前CMY);
元 = "createElement";
名 = "className";
找 = "getElementById";
旧 = (書 = document)[找]("pm");
新 = 書[找]("nm");
(更 = async e => {
  表示.setMonth(表示.getMonth() + e);
  年 = 表示.getFullYear();
  月 = 表示.getMonth();
  数 = new Date(年, 月 + 1, 0).getDate();
  設(年, 月);
  根 = 書[找]("ca");
  根.innerHTML = "";
  const calendarData = await 獲();
  await 更新图片(年, 月);
  根.appendChild(await 造(calendarData, 数, 年, 月));
})(0);

旧.onclick = _ => 更(-1); // Go to Previous Month
新.onclick = _ => 更(1); // Go to Next Month
document.addEventListener('click', event => {
  const evi = 書[找]("evi");
  if (evi.style.display === "block" && !判断(event, evi)) {
    evi.style.display = "none";
  }
});
