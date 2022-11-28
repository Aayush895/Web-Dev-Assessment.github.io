// Generates random quotes when 'Request a Free Quote' button is pressed

let quote_btn = document.getElementById("quote-btn");
let quote_header = document
  .getElementById("header-titles")
  .getElementsByTagName("h3");

quote_btn.addEventListener("click", () => {
  getRandomQuote();
});

const getRandomQuote = async () => {
  const url = `https://api.quotable.io/random`;
  const data = await fetch(url).then((resData) => resData.json());

  quote_header[0].innerHTML = data.content;
};

// Takes to the main quillHash site when 'Explore Servies' btn is pressed

const redirectSite = () => {
  location.href = "https://audits.quillhash.com/smart-contract-audit";
};

// Highlighting the crypto badges when 'prev' or 'next' of the image carousel is clicked

const prev_btn = document.getElementById("prev-btn");
const next_btn = document.getElementById("next-btn");
const btns = document
  .getElementsByClassName("latest-work-btn")[0]
  .getElementsByTagName("span");

let clickCount = 0;

next_btn.addEventListener("click", () => {
  changeNextBtnBackground();
});

prev_btn.addEventListener("click", () => {
  changePrevBtnBackground();
});

const changeNextBtnBackground = () => {
  clickCount++;
  if (clickCount == btns.length) {
    clickCount = 0;
  }
  for (let i = 0; i < btns.length; i++) {
    if (i == clickCount) {
      btns[i].style.border = "none";
      btns[i].style.backgroundColor = "#2D83EE";
    } else {
      btns[i].style.border = "1px solid white";
      btns[i].style.backgroundColor = "transparent";
    }
  }
};

const changePrevBtnBackground = () => {
  clickCount--;
  if (clickCount < 0) {
    clickCount = btns.length - 1;
  }
  for (let i = btns.length - 1; i >= 0; i--) {
    if (i == clickCount) {
      btns[i].style.border = "none";
      btns[i].style.backgroundColor = "#2D83EE";
    } else {
      btns[i].style.border = "1px solid white";
      btns[i].style.backgroundColor = "transparent";
    }
  }
};

// Mentioned Companies page
const ctPage = () => {
  location.href =
    "https://www.cointelligence.com/content/tips-for-securing-icos/";
};

const productHuntPage = () => {
  location.href = "https://www.producthunt.com/products/icocabinet#quillaudits";
};

const moneyControlPage = () => {
  location.href = "https://audits.quillhash.com/smart-contract-audit#";
};

const crunchPage = () => {
  location.href =
    "https://coincrunch.in/2018/11/29/why-smart-contract-security-auditing-is-important-explains-quillaudits/";
};

const hackerNoonPage = () => {
  location.href =
    "https://hackernoon.com/4-best-audit-and-kyc-solutions-for-defi-projects-f52737xe";
};

const investInBCPage = () => {
  location.href = "https://www.investinblockchain.com/smart-contract-security/";
};
