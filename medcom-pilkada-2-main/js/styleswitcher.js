!(function (e) {
  "use strict";
  (window.console =
    window.console ||
    (function () {
      var e = {};
      return (
        (e.log =
          e.warn =
          e.debug =
          e.info =
          e.error =
          e.time =
          e.dir =
          e.profile =
          e.clear =
          e.exception =
          e.trace =
          e.assert =
            function () {}),
        e
      );
    })()),
    e(document).ready(function () {
      var s =
        ' 	<h2>TEMPLATE STYLES <a href="#"><i class="icon_cogs"></i></a></h2>     <div class="content2">   <h3>Color Style</h3>     <div class="switcher-box">     <a id="yellow" class="styleswitch color partai"></a> <a id="cyan" class="styleswitch color"></a> <a id="blue" class="styleswitch color"></a> <a id="teal" class="styleswitch color"></a> <a id="green" class="styleswitch color"></a>   <a id="lime" class="styleswitch color"></a> 	<a id="deeporange" class="styleswitch color"></a>          </div><!-- End switcher-box -->     <div class="clear"></div>      <div class="bg hidden">      <h3>Background Image</h3>      <a id="bg-1" class="pattern partai"></a>     <a id="bg-2" class="pattern"></a>     <a id="bg-3" class="pattern"></a>     <a id="bg-4" class="pattern"></a>     <a id="bg-5" class="pattern"></a>     <a id="bg-6" class="pattern"></a>     <a id="bg-7" class="pattern"></a>     <a id="bg-8" class="pattern"></a>     <a id="bg-9" class="pattern"></a>     <a id="bg-10" class="pattern"></a>   </div>     <div class="clear"></div>   <h3>Layout Style</h3> 	<div class="layout-switcher">     <a id="wide" class="layout button" onClick="window.location.href=window.location.href" >WIDE</a>     <a id="boxed" class="layout button " onClick="window.location.href=window.location.href" >BOXED</a>     </div>     <div class="clear"></div><a id="reset" class="dark-style button " onClick="window.location.href=window.location.href" >RESET</a></div> <!-- End content --> 	';
      e(".switcher").prepend(s);
    }),
    e(document).ready(function () {
      e.cookie("mycookie");
      e("body").addClass("bg-1"),
        e("#bg-2").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-2"),
            e.cookie("mycookie", "bg-2"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#bg-3").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-2"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-3"),
            e.cookie("mycookie", "bg-3"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#bg-4").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-2"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-4"),
            e.cookie("mycookie", "bg-4"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#bg-1").click(function () {
          e("body").removeClass("bg-2"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-1"),
            e.cookie("mycookie", "bg-1"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#bg-5").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-2"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-5"),
            e.cookie("mycookie", "bg-5"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#bg-6").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-2"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-6"),
            e.cookie("mycookie", "bg-6"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#bg-7").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-2"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-7"),
            e.cookie("mycookie", "bg-7"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#bg-8").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-2"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-8"),
            e.cookie("mycookie", "bg-8"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#bg-9").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-2"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-9"),
            e.cookie("mycookie", "bg-9"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#bg-10").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-2"),
            e("body").addClass("bg-10"),
            e.cookie("mycookie", "bg-10"),
            e(".pattern").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#reset").click(function () {
          e("body").removeClass("bg-1"),
            e("body").removeClass("bg-2"),
            e("body").removeClass("bg-3"),
            e("body").removeClass("bg-4"),
            e("body").removeClass("bg-5"),
            e("body").removeClass("bg-6"),
            e("body").removeClass("bg-7"),
            e("body").removeClass("bg-8"),
            e("body").removeClass("bg-9"),
            e("body").removeClass("bg-10"),
            e("body").addClass("bg-1"),
            e.cookie("mycookie", "bg-1"),
            e(".pattern").removeClass("partai"),
            e("#bg-1").addClass("partai");
        }),
        e.cookie("mycookie") && e("body").addClass(e.cookie("mycookie"));
    }),
    e(document).ready(function () {
      function s(s) {
        e.cookie(o, s),
          e("head link[id=layout]").attr("href", "css/layout/" + s + ".css");
      }
      var o = "wide";
      e.cookie(o) && s(e.cookie(o)),
        e("#wide").click(function () {
          s("wide"),
            e("#boxed").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#boxed").click(function () {
          s("boxed"),
            e("#wide").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#reset").click(function () {
          s("wide"),
            e("#boxed").removeClass("partai"),
            e("#wide").addClass("partai");
        });
    }),
    e(document).ready(function () {
      function s(s) {
        e.cookie(o, s),
          e("head link[id=colors]").attr("href", "css/colors/" + s + ".css");
      }
      var o = "yellow";
      e.cookie(o) && s(e.cookie(o)),
        e("#yellow").click(function () {
          s("yellow"),
            e(".styleswitch").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#blue").click(function () {
          s("blue"),
            e(".styleswitch").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#cyan").click(function () {
          s("cyan"),
            e(".styleswitch").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#lime").click(function () {
          s("lime"),
            e(".styleswitch").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#green").click(function () {
          s("green"),
            e(".styleswitch").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#deeporange").click(function () {
          s("deeporange"),
            e(".styleswitch").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#teal").click(function () {
          s("teal"),
            e(".styleswitch").removeClass("partai"),
            e(this).addClass("partai");
        }),
        e("#reset").click(function () {
          s("yellow"),
            e(".styleswitch").removeClass("partai"),
            e("#yellow").addClass("partai");
        });
    }),
    e(document).ready(function () {
      e(".switcher").animate({ left: "-160px" }),
        e(".switcher h2 a").click(function (s) {
          s.preventDefault();
          var o = e(".switcher");
          console.log(o.css("left")),
            e(".switcher").animate(
              "-160px" === o.css("left") ? { left: "0px" } : { left: "-160px" }
            );
        });
    });
})(jQuery);
