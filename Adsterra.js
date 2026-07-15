const ADSTERRA_LINK = "https://www.effectivecpmnetwork.com/d7u2jxe2g5?key=9eaaf916e855ccd7f1e9293959c110b0";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".adsterra-link").forEach(function (btn) {
    btn.href = ADSTERRA_LINK;
    btn.target = "_blank";
    btn.rel = "nofollow sponsored";
  });
});
