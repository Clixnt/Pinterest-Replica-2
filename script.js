const notiH = document.getElementById("notificationsIcon");
const dropdown4 = document.getElementById("dropdown-contents4");

notiH.onclick = function () {
  if (dropdown4.style.display === "none") {
    dropdown4.style.display = "block";
  } else {
    dropdown4.style.display = "none";
  }
};

const messageH = document.getElementById("chatIcon");
const dropdown0 = document.getElementById("dropdown-contents0");
const closeMsg = document.getElementById("msg-close");

messageH.onclick = function () {
  if (dropdown0.style.display === "none") {
    dropdown0.style.display = "block";
  } else {
    dropdown0.style.display = "none";
  }
};
closeMsg.onclick = function () {
  dropdown0.style.display = "none";
};

const accountH = document.getElementById("accountIcon");
const dropdown1 = document.getElementById("dropdown-contents1");

accountH.onclick = function () {
  if (dropdown1.style.display === "none") {
    dropdown1.style.display = "block";
  } else {
    dropdown1.style.display = "none";
  }
};

const arrowH = document.getElementById("w3-span-img-last");
const dropdown2 = document.getElementById("dropdown-contents2");

arrowH.onclick = function () {
  if (dropdown2.style.display === "none") {
    dropdown2.style.display = "block";
  } else {
    dropdown2.style.display = "none";
  }
};

const pinterest = document.getElementById("pinterestLogo");
const notificationsIcon = document.getElementById("notificationsIcon");
const acccountIcon = document.getElementById("accountIcon");
const chatIcon = document.getElementById("chatIcon");
const arrowButton = document.getElementById("w3-span-img-last");
const shareIcon = document.getElementById("shareIcon");
const moreIcon = document.getElementById("moreIcon");

pinterest.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    pinterest.src = "Icon/pindark.png";
    notificationsIcon.src = "Icon/notifications_dark.svg";
    chatIcon.src = "Icon/chat_dark.svg";
    acccountIcon.src = "Icon/account_dark.svg";
    arrowButton.src = "Icon/arrow_dark.svg";
    shareIcon.src = "Icon/share_dark.svg";
    moreIcon.src = "Icon/more_dark.svg";
  } else {
    pinterest.src = "Icon/icons8-pinterest-96.png";
    notificationsIcon.src = "Icon/notifications.svg";
    chatIcon.src = "Icon/chat.svg";
    acccountIcon.src = "Icon/account.svg";
    arrowButton.src = "Icon/arrow_drop_down.svg";
    shareIcon.src = "Icon/share.svg";
    moreIcon.src = "Icon/more_horiz.svg";
  }
};
