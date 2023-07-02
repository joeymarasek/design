/*************************
 * Active Header Sections
 *************************/

let navbar = document.getElementById("header");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("header").offsetHeight;

let navbarLinks = document.querySelectorAll("header a");

window.addEventListener("scroll", (e) => {
  scrollpos = window.scrollY;
  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= scrollpos + 150 &&
      section.offsetTop + section.offsetHeight > scrollpos + 150
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

/*************************
 * TypeIt
 *************************/

new TypeIt("#heroType", {
  speed: 25,
  lifeLike: true,
  nextStringDelay: 10,
  waitUntilVisible: true,
}).go();

/*************************
    Skills Bars
*************************/

(function () {
  var SkillsBar = function (bars) {
    this.bars = document.querySelectorAll(bars);
    if (this.bars.length > 0) {
      this.init();
    }
  };

  SkillsBar.prototype = {
    init: function () {
      var self = this;
      self.index = -1;
      self.timer = setTimeout(function () {
        self.action();
      }, 500);
    },
    select: function (n) {
      var self = this,
        bar = self.bars[n];

      if (bar) {
        var width = bar.parentNode.dataset.percent;

        bar.style.width = width;
        bar.parentNode.classList.add("complete");
      }
    },
    action: function () {
      var self = this;
      self.index++;
      if (self.index == self.bars.length) {
        clearTimeout(self.timer);
      } else {
        self.select(self.index);
      }

      setTimeout(function () {
        self.action();
      }, 500);
    },
  };

  window.SkillsBar = SkillsBar;
})();

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var skills = new SkillsBar(".skillbar-bar");
  });
})();