const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const header = document.querySelector("header");
header.style.borderRadius = "5px";
header.addEventListener("mouseenter", (event) => {
  event.target.style.background = "#F8F8F8";
  event.target.style.padding = "0 2% 2%";
});
header.addEventListener("mouseleave", (event) => {
  event.target.style.background = "white";
});

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll("a");
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];
links.forEach(link => {
  link.style.color = "#3CB371";
});

const newNav1 = document.createElement("a");
newNav1.textContent = "Locations";
newNav1.style.color = "#3CB371";
const navParent = document.querySelector("nav");
navParent.append(newNav1);

const newNav2 = document.createElement("a");
newNav2.textContent = "Home";
newNav2.style.color = "#3CB371";
navParent.prepend(newNav2);

const title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];
button.style.borderRadius = "5px";
button.addEventListener("click", (event) => {
  event.target.style.background = "dodgerblue";
  event.target.style.color = "white";
})
button.addEventListener("dblclick", (event) => {
  event.target.style.background = "white";
  event.target.style.color = "black";
})

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

const contentTitles = document.querySelectorAll("h4");
contentTitles[0].textContent = siteContent["main-content"]["features-h4"];
contentTitles[1].textContent = siteContent["main-content"]["about-h4"];
contentTitles[2].textContent = siteContent["main-content"]["services-h4"];
contentTitles[3].textContent = siteContent["main-content"]["product-h4"];
contentTitles[4].textContent = siteContent["main-content"]["vision-h4"];
contentTitles[5].textContent = siteContent["contact"]["contact-h4"];

const topContent = document.querySelectorAll(".top-content .text-content p");
topContent[0].textContent = siteContent["main-content"]["features-content"];
topContent[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];
middleImg.style.borderRadius = "5px";

const bottomContent = document.querySelectorAll(".bottom-content .text-content p")
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

const contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[0].textContent = siteContent["contact"]["email"];

const footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];