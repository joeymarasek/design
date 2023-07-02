/*************************
 * Cursor
 *************************/

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
})

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