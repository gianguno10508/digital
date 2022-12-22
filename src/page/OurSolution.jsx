import React from "react";
import "../asset/styles/oursolution.css";
import AfterBanner from "../components/ui/our-solution/AfterBanner";
import BannerTop from "../components/ui/our-solution/BannerTop";
import Introduce from "../components/ui/our-solution/Introduce";
import $ from "jquery";
import ContentOurSolution from "../asset/fakedata/oursolution/contentOursolution";
import LeftRightCol from "../components/common/LeftRightCol";
import ScrollTime from "../components/ui/our-solution/ScrollTime";
import BannerBottomSolution from "../components/ui/our-solution/BannerBottomSolution";
import { useEffect } from "react";
import { getContentOurSolution } from "../gql/our-solution";
import { useState } from "react";
function OurSolution() {
  // window.addEventListener("scroll", function () {
  //   var scrolledY = window.scrollY;

  //   if (scrolledY > 1150 && scrolledY < 3135) {
  //     // $("#content_2").css("position", "fixed");
  //     // $("#content_2").css("top", scrolledY * 0.0001 + "px");
  //     // $("#content_2").css("left",  -(scrolledY - 1150) * 2.899565 + "px");
  //     $("#content_2").css("left",  -(scrolledY - 1150) * 2.899565 + "px");
  //   }
  //   if (scrolledY <= 1150) {
  //     // $("#content_2").css("position", "initial")
  //   }
  //   if (scrolledY >= 3135) {
  //     // $("#content_2").css("position", "absolute")
  //     // $("#content_2").css("top", "3135px")
  //   }
  // });
  // $(function(){
  //   var hei = $('.scrollmagic-pin-space').height();
  //     $(document).scroll(function(){

  //         if(($(this).scrollTop() >= ($('.scrollmagic-pin-space').offset().top - 50))) {
  //             var offsetPercent = $(this).scrollTop()*0.1;
  //             if((110-offsetPercent >= (-76.5)) && (110-offsetPercent <= 0)){
  //               $(".scrollmagic-pin-space").addClass("scrollmagic-pin-space-offset");
  //               $(".scrollmagic-pin-space #pinContainer").addClass("pos-fixed");
  //               $("#slideContainer").css("transform", `translate(${((110-offsetPercent))}%, 0%) translate3d(0px, 0px, 0px)`);
  //             }
  //         } else{
  //           $(".scrollmagic-pin-space").removeClass("scrollmagic-pin-space-offset");
  //           $(".scrollmagic-pin-space #pinContainer").removeClass("pos-fixed");
  //           $("#slideContainer").css("transform", `translate(${0}%, 0%) translate3d(0px, 0px, 0px)`);
  //         }

  //         if($(this).scrollTop() >= $('.scrollmagic-pin-space').offset().top + hei) {
  //             $(".scrollmagic-pin-space").removeClass("scrollmagic-pin-space-offset");
  //             $(".scrollmagic-pin-space").css({"padding-top": "300px"});
  //             $(".scrollmagic-pin-space #pinContainer").removeClass("pos-fixed");
  //             $("#slideContainer").css("transform", `translate(${0}%, 0%) translate3d(0px, 0px, 0px)`);
  //         }
  //     });

  // });

  const [bannerTop, setBannerTop] = useState([]);
  const [plafrom, setPlafrom] = useState([]);
  const [introduce, setIntroduce] = useState([]);
  const [scrollTime, setScrollTime] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    try {
      getContentOurSolution().then(function (res) {
        // console.log(res.page.ourSolution);
        setPlafrom(res.page.ourSolution.listImage);
        setIntroduce(res.page.ourSolution.introduce);
        setScrollTime(res.page.ourSolution.scrollTime)
        const banner = {
          content: res.page.content,
          title: null
        }
        setBannerTop(banner)
      })
    }
    catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <div className="our-solution-section">
      <BannerTop bannerTop={bannerTop} plafrom={plafrom} />
      <Introduce introduce={introduce} />
      {
        scrollTime && <ScrollTime scrollTime={scrollTime} />
      }

      <BannerBottomSolution />
    </div>
  );
}

export default OurSolution;
