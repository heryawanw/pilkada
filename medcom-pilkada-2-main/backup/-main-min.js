//file presented for demo, has differences from quality of final product, all comments has been deleted for  security reasons
"use strict";
function menu() {
  var a = jQuery,
    b = a("body"),
    c = ".main-menu";
  a(c).find(".parent > a .open-sub, .megamenu .title .open-sub").remove(),
    a(c)
      .find(".parent > a, .megamenu .title")
      .append('<span class="open-sub"><span ></span></span>'),
    a(c)
      .find(".open-sub")
      .click(function (b) {
        b.preventDefault();
        var c = a(this).closest("li, .box");
        if (a(c).hasClass("active"))
          a(c).children().last().slideUp(50), a(c).removeClass("active");
        else {
          var d = a(this)
            .closest("li, .box")
            .parent("ul, .sub-list")
            .children("li, .box");
          a(d).is(".active") &&
            a(d).removeClass("active").children("ul").slideUp(50),
            a(c).children().last().slideDown(50),
            a(c).addClass("active");
        }
      }),
    a(c)
      .find(".parent > a")
      .click(function (c) {
        if (
          b.width() + scrollWidth > 979 &&
          navigator.userAgent.match(/iPad|iPhone|Android/i)
        ) {
          var d = a(this);
          d.parent().hasClass("open")
            ? (d.parent().removeClass("open"), c.preventDefault())
            : (c.preventDefault(), d.parent().addClass("open"));
        }
      }),
    b.on("click", function (b) {
      a(b.target).is(c + " *") ||
        (a(c + " .collapse").hasClass("in") &&
          (a(c + " .navbar-toggle").addClass("collapsed"),
          a(c + " .navbar-collapse").collapse("hide")));
    });
  var d = a(".top-navbar").find(".collapse");
  b.width() + scrollWidth < 768
    ? d.css("width", b.width())
    : d.css("width", "auto");
}
function magnPopupStart() {
  $("#inline-popups").magnificPopup({
    delegate: "a",
    removalDelay: 500,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
    midClick: !0,
  }),
    $(".lightbox").magnificPopup({
      type: "image",
      mainClass: "mfp-3d-unfold",
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
        },
      },
      closeOnContentClick: !0,
      midClick: !0,
    }),
    $("a.hinge").magnificPopup({
      mainClass: "mfp-with-fade",
      removalDelay: 1e3,
      callbacks: {
        beforeClose: function () {
          this.content.addClass("hinge");
        },
        close: function () {
          this.content.removeClass("hinge");
        },
      },
      midClick: !0,
    }),
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-3d-unfold",
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
        },
      },
      gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      },
    }),
    $(".popup-gallery2").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-3d-unfold",
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          );
        },
      },
      gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      },
    }),
    $(".popup-multi-gallery").each(function () {
      $(this).magnificPopup({
        delegate: "a",
        type: "image",
        gallery: { enabled: !0 },
      });
    }),
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    });
}
function register(a) {
  $.ajax({
    type: a.attr("method"),
    url: a.attr("action"),
    data: a.serialize(),
    cache: !1,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    error: function () {
      $("#notification_container").html(
        '<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Could not connect to server. Please try again later.</div>'
      );
    },
    success: function (a) {
      if ("success" != a.result) {
        var b = a.msg;
        $("#notification_container").html(
          '<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
            b +
            "</div>"
        );
      } else {
        var b = a.msg;
        $("#notification_container").html(
          '<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
            b +
            "</div>"
        );
      }
    },
  });
}
var parent, child, scrollWidth, bodyWidth;
void 0 === scrollWidth &&
  ((parent = jQuery(
    '<div style="width: 50px; height: 50px; overflow: auto"><div/></div>'
  ).appendTo("body")),
  (child = parent.children()),
  (scrollWidth = child.innerWidth() - child.height(99).innerWidth()),
  parent.remove()),
  $(document).ready(function () {
    $("#back-top").hide(),
      $(function () {
        $(window).scroll(function () {
          $(this).scrollTop() > 100
            ? $("#back-top").fadeIn()
            : $("#back-top").fadeOut();
        }),
          $("#back-top a").click(function () {
            return $("body,html").animate({ scrollTop: 0 }, 600), !1;
          });
      });
    var a = ".box-with-hover";
    navigator.userAgent.match(/iPad|iPhone|Android/i) &&
      ($(a).find(".hovered").removeClass("hovered"), event.preventDefault()),
      $(".toggle-view-custom li").click(function () {
        var a = $(this).children("div.panel");
        a.is(":hidden")
          ? (a.slideDown("10"),
            $(this)
              .children(".ui-accordion-header")
              .addClass("ui-accordion-header-active"))
          : (a.slideUp("10"),
            $(this)
              .children(".ui-accordion-header")
              .removeClass("ui-accordion-header-active"));
      }),
      $(".accordion-custom").accordion({ heightStyle: "content" }),
      jQuery("#nav").affix({ offset: { top: 1 } });
    var b = $(".cd-timeline-block");
    b.each(function () {
      $(this).offset().top >
        $(window).scrollTop() + 0.75 * $(window).height() &&
        $(this)
          .find(".cd-timeline-img, .cd-timeline-content")
          .addClass("is-hidden");
    }),
      $(window).on("scroll", function () {
        b.each(function () {
          $(this).offset().top <=
            $(window).scrollTop() + 0.75 * $(window).height() &&
            $(this).find(".cd-timeline-img").hasClass("is-hidden") &&
            $(this)
              .find(".cd-timeline-img, .cd-timeline-content")
              .removeClass("is-hidden")
              .addClass("bounce-in");
        });
      }),
      menu();
  }),
  $(document).on("scroll", function () {
    setTimeout(function () {
      $("#nav").hasClass("affix")
        ? $(".page-main-content").addClass("affix-indent")
        : $(".page-main-content").removeClass("affix-indent");
    }, 0);
  }),
  jQuery(document).ready(function () {
    magnPopupStart();
  }),
  $(function () {
    var a = $("#mc-embedded-subscribe-form");
    $("#mc-embedded-subscribe").on("click", function (b) {
      b && b.preventDefault(), register(a);
    });
  }),
  (function (a) {
    function b(a) {
      return new RegExp("(^|\\s+)" + a + "(\\s+|$)");
    }
    function f(a, b) {
      var f = c(a, b) ? e : d;
      f(a, b);
    }
    var c, d, e;
    "classList" in document.documentElement
      ? ((c = function (a, b) {
          return a.classList.contains(b);
        }),
        (d = function (a, b) {
          a.classList.add(b);
        }),
        (e = function (a, b) {
          a.classList.remove(b);
        }))
      : ((c = function (a, c) {
          return b(c).test(a.className);
        }),
        (d = function (a, b) {
          c(a, b) || (a.className = a.className + " " + b);
        }),
        (e = function (a, c) {
          a.className = a.className.replace(b(c), " ");
        }));
    var g = {
      hasClass: c,
      addClass: d,
      removeClass: e,
      toggleClass: f,
      has: c,
      add: d,
      remove: e,
      toggle: f,
    };
    "function" === typeof define && define.amd ? define(g) : (a.classie = g);
  })(window),
  (function (a) {
    function b() {
      var b = !1;
      return (
        (function (a) {
          (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            a
          ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )) &&
            (b = !0);
        })(navigator.userAgent || navigator.vendor || a.opera),
        b
      );
    }
    function c(a) {
      (this.el = a),
        (this.inputEl = a.querySelector("form > input.sb-search-input")),
        this._initEvents();
    }
    !a.addEventListener &&
      a.Element &&
      (function () {
        function a(a, b) {
          Window.prototype[a] =
            HTMLDocument.prototype[a] =
            Element.prototype[a] =
              b;
        }
        var b = [];
        a("addEventListener", function (a, c) {
          var d = this;
          b.unshift({
            __listener: function (a) {
              (a.partaiTarget = d),
                (a.pageX = a.clientX + document.documentElement.scrollLeft),
                (a.pageY = a.clientY + document.documentElement.scrollTop),
                (a.preventDefault = function () {
                  a.returnValue = !1;
                }),
                (a.relatedTarget = a.fromElement || null),
                (a.stopPropagation = function () {
                  a.cancelBubble = !0;
                }),
                (a.relatedTarget = a.fromElement || null),
                (a.target = a.srcElement || d),
                (a.timeStamp = +new Date()),
                c.call(d, a);
            },
            listener: c,
            target: d,
            type: a,
          }),
            this.attachEvent("on" + a, b[0].__listener);
        }),
          a("removeEventListener", function (a, c) {
            for (var d = 0, e = b.length; d < e; ++d)
              if (b[d].target == this && b[d].type == a && b[d].listener == c)
                return this.detachEvent("on" + a, b.splice(d, 1)[0].__listener);
          }),
          a("dispatchEvent", function (a) {
            try {
              return this.fireEvent("on" + a.type, a);
            } catch (c) {
              for (var d = 0, e = b.length; d < e; ++d)
                b[d].target == this &&
                  b[d].type == a.type &&
                  b[d].call(this, a);
            }
          });
      })(),
      !String.prototype.trim &&
        (String.prototype.trim = function () {
          return this.replace(/^\s+|\s+$/g, "");
        }),
      (c.prototype = {
        _initEvents: function () {
          var a = this,
            b = function (b) {
              b.stopPropagation(),
                (a.inputEl.value = a.inputEl.value.trim()),
                classie.has(a.el, "sb-search-open")
                  ? classie.has(a.el, "sb-search-open") &&
                    /^\s*$/.test(a.inputEl.value) &&
                    (b.preventDefault(), a.close())
                  : (b.preventDefault(), a.open());
            };
          this.el.addEventListener("click", b),
            this.el.addEventListener("touchstart", b),
            this.inputEl.addEventListener("click", function (a) {
              a.stopPropagation();
            }),
            this.inputEl.addEventListener("touchstart", function (a) {
              a.stopPropagation();
            });
        },
        open: function () {
          var a = this;
          classie.add(this.el, "sb-search-open"), b() || this.inputEl.focus();
          var c = function () {
            a.close(),
              this.removeEventListener("click", c),
              this.removeEventListener("touchstart", c);
          };
          document.addEventListener("click", c),
            document.addEventListener("touchstart", c);
        },
        close: function () {
          this.inputEl.blur(), classie.remove(this.el, "sb-search-open");
        },
      }),
      (a.UISearch = c);
  })(window),
  new UISearch(document.getElementById("sb-search")),
  (function (a, b, c) {
    function d(a) {
      return a;
    }
    function e(a) {
      return decodeURIComponent(a.replace(f, " "));
    }
    var f = /\+/g,
      g = (a.cookie = function (f, h, i) {
        if (h !== c) {
          if (
            ((i = a.extend({}, g.defaults, i)),
            null === h && (i.expires = -1),
            "number" === typeof i.expires)
          ) {
            var j = i.expires,
              k = (i.expires = new Date());
            k.setDate(k.getDate() + j);
          }
          return (
            (h = g.json ? JSON.stringify(h) : String(h)),
            (b.cookie = [
              encodeURIComponent(f),
              "=",
              g.raw ? h : encodeURIComponent(h),
              i.expires ? "; expires=" + i.expires.toUTCString() : "",
              i.path ? "; path=" + i.path : "",
              i.domain ? "; domain=" + i.domain : "",
              i.secure ? "; secure" : "",
            ].join(""))
          );
        }
        for (
          var o, l = g.raw ? d : e, m = b.cookie.split("; "), n = 0;
          (o = m[n] && m[n].split("="));
          n++
        )
          if (l(o.shift()) === f) {
            var p = l(o.join("="));
            return g.json ? JSON.parse(p) : p;
          }
        return null;
      });
    (g.defaults = {}),
      (a.removeCookie = function (b, c) {
        return null !== a.cookie(b) ? (a.cookie(b, null, c), !0) : !1;
      });
  })(jQuery, document),
  !(function (a) {
    (window.console =
      window.console ||
      (function () {
        var a = {};
        return (
          (a.log =
            a.warn =
            a.debug =
            a.info =
            a.error =
            a.time =
            a.dir =
            a.profile =
            a.clear =
            a.exception =
            a.trace =
            a.assert =
              function () {}),
          a
        );
      })()),
      a(document).ready(function () {
        var b =
          ' 	<h2>TEMPLATE STYLES <a href="#"><i class="icon_cogs"></i></a></h2>     <div class="content2">   <h3>Color Style</h3>     <div class="switcher-box">     <a id="yellow" class="styleswitch color partai"></a> <a id="cyan" class="styleswitch color"></a> <a id="blue" class="styleswitch color"></a> <a id="teal" class="styleswitch color"></a> <a id="green" class="styleswitch color"></a>   <a id="lime" class="styleswitch color"></a> 	<a id="deeporange" class="styleswitch color"></a>          </div><!-- End switcher-box -->     <div class="clear"></div>      <div class="bg hidden">      <h3>Background Image</h3>      <a id="bg-1" class="pattern partai"></a>     <a id="bg-2" class="pattern"></a>     <a id="bg-3" class="pattern"></a>     <a id="bg-4" class="pattern"></a>     <a id="bg-5" class="pattern"></a>     <a id="bg-6" class="pattern"></a>     <a id="bg-7" class="pattern"></a>     <a id="bg-8" class="pattern"></a>     <a id="bg-9" class="pattern"></a>     <a id="bg-10" class="pattern"></a>   </div>     <div class="clear"></div>   <h3>Layout Style</h3> 	<div class="layout-switcher">     <a id="wide" class="layout button" onClick="window.location.href=window.location.href" >WIDE</a>     <a id="boxed" class="layout button " onClick="window.location.href=window.location.href" >BOXED</a>     </div>     <div class="clear"></div><a id="reset" class="dark-style button " onClick="window.location.href=window.location.href" >RESET</a></div> <!-- End content --> 	';
        a(".switcher").prepend(b);
      }),
      a(document).ready(function () {
        a.cookie("mycookie"),
          a("body").addClass("bg-1"),
          a("#bg-2").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-2"),
              a.cookie("mycookie", "bg-2"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#bg-3").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-2"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-3"),
              a.cookie("mycookie", "bg-3"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#bg-4").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-2"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-4"),
              a.cookie("mycookie", "bg-4"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#bg-1").click(function () {
            a("body").removeClass("bg-2"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-1"),
              a.cookie("mycookie", "bg-1"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#bg-5").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-2"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-5"),
              a.cookie("mycookie", "bg-5"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#bg-6").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-2"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-6"),
              a.cookie("mycookie", "bg-6"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#bg-7").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-2"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-7"),
              a.cookie("mycookie", "bg-7"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#bg-8").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-2"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-8"),
              a.cookie("mycookie", "bg-8"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#bg-9").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-2"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-9"),
              a.cookie("mycookie", "bg-9"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#bg-10").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-2"),
              a("body").addClass("bg-10"),
              a.cookie("mycookie", "bg-10"),
              a(".pattern").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#reset").click(function () {
            a("body").removeClass("bg-1"),
              a("body").removeClass("bg-2"),
              a("body").removeClass("bg-3"),
              a("body").removeClass("bg-4"),
              a("body").removeClass("bg-5"),
              a("body").removeClass("bg-6"),
              a("body").removeClass("bg-7"),
              a("body").removeClass("bg-8"),
              a("body").removeClass("bg-9"),
              a("body").removeClass("bg-10"),
              a("body").addClass("bg-1"),
              a.cookie("mycookie", "bg-1"),
              a(".pattern").removeClass("partai"),
              a("#bg-1").addClass("partai");
          }),
          a.cookie("mycookie") && a("body").addClass(a.cookie("mycookie"));
      }),
      a(document).ready(function () {
        function b(b) {
          a.cookie(c, b),
            a("head link[id=layout]").attr("href", "css/layout/" + b + ".css");
        }
        var c = "wide";
        a.cookie(c) && b(a.cookie(c)),
          a("#wide").click(function () {
            b("wide"),
              a("#boxed").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#boxed").click(function () {
            b("boxed"),
              a("#wide").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#reset").click(function () {
            b("wide"),
              a("#boxed").removeClass("partai"),
              a("#wide").addClass("partai");
          });
      }),
      a(document).ready(function () {
        function b(b) {
          a.cookie(c, b),
            a("head link[id=colors]").attr("href", "css/colors/" + b + ".css");
        }
        var c = "yellow";
        a.cookie(c) && b(a.cookie(c)),
          a("#yellow").click(function () {
            b("yellow"),
              a(".styleswitch").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#blue").click(function () {
            b("blue"),
              a(".styleswitch").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#cyan").click(function () {
            b("cyan"),
              a(".styleswitch").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#lime").click(function () {
            b("lime"),
              a(".styleswitch").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#green").click(function () {
            b("green"),
              a(".styleswitch").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#deeporange").click(function () {
            b("deeporange"),
              a(".styleswitch").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#teal").click(function () {
            b("teal"),
              a(".styleswitch").removeClass("partai"),
              a(this).addClass("partai");
          }),
          a("#reset").click(function () {
            b("yellow"),
              a(".styleswitch").removeClass("partai"),
              a("#yellow").addClass("partai");
          });
      }),
      a(document).ready(function () {
        a(".switcher").animate({ left: "-160px" }),
          a(".switcher h2 a").click(function (b) {
            b.preventDefault();
            var c = a(".switcher");
            console.log(c.css("left")),
              a(".switcher").animate(
                "-160px" === c.css("left")
                  ? { left: "0px" }
                  : { left: "-160px" }
              );
          });
      });
  })(jQuery);
