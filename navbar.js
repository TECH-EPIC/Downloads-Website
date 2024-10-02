let navbar = document.createElement("nav");
navbar.className = "navbar navbar-expand-lg navbar-light bg-light";
document.body.appendChild(navbar);

// Container
let container = document.createElement("div");
container.className = "container-fluid";
navbar.appendChild(container);

// The navbar brand
let brand = document.createElement("a");
brand.className = "navbar-brand";
brand.innerText = "EPIC TECH";
brand.href = "https://gtaepic.xyz";
container.appendChild(brand);

let toggle = document.createElement("button");
toggle.className = "navbar-toggler";
toggle.type = "button";
toggle.setAttribute("data-bs-toggle", "collapse");
toggle.setAttribute("data-bs-target", "#navbarNav");
container.appendChild(toggle);

let toggleIcon = document.createElement("span");
toggleIcon.className = "navbar-toggler-icon";
toggle.appendChild(toggleIcon);

// Pages
let pages = document.createElement("div");
pages.className = "collapse navbar-collapse";
pages.id = "navbarNav";
container.appendChild(pages);

// Pages List
let pagesList = document.createElement("ul");
pagesList.className = "navbar-nav";
pages.appendChild(pagesList);

// Home Page
let homeLI = document.createElement("li");
homeLI.className = "nav-item";
let home = document.createElement("a");
home.className = "nav-link";
home.innerText = "Home";
home.href = "https://gtaepic.xyz";
homeLI.appendChild(home);
pagesList.appendChild(homeLI);

// Downloads page
let downloadsLI = document.createElement("li");
downloadsLI.className = "nav-item";
let downloads = document.createElement("a");
downloads.className = "nav-link active";
downloads.innerText = "Downloads";
downloads.href = "https://downloads.gtaepic.xyz";
downloadsLI.appendChild(downloads);
pagesList.appendChild(downloadsLI);