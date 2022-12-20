import React from "react";
import "../asset/styles/oursolution.css";
import AfterBanner from "../components/ui/our-solution/AfterBanner";
import BannerTop from "../components/ui/our-solution/BannerTop";
import Introduce from "../components/ui/our-solution/Introduce";
import $ from "jquery";
import ContentOurSolution from "../asset/fakedata/oursolution/contentOursolution";
import LeftRightCol from "../components/common/LeftRightCol";
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
  $(function(){
    var hei = $('.scrollmagic-pin-space').height();
      $(document).scroll(function(){
          
          if(($(this).scrollTop() >= ($('.scrollmagic-pin-space').offset().top - 50))) {
              var offsetPercent = $(this).scrollTop()*0.1;
              if((110-offsetPercent >= (-76.5)) && (110-offsetPercent <= 0)){
                $(".scrollmagic-pin-space").addClass("scrollmagic-pin-space-offset");
                $(".scrollmagic-pin-space #pinContainer").addClass("pos-fixed");
                $("#slideContainer").css("transform", `translate(${Math.ceil((110-offsetPercent))}%, 0%) translate3d(0px, 0px, 0px)`);
              }
          } else{
            $(".scrollmagic-pin-space").removeClass("scrollmagic-pin-space-offset");
            $(".scrollmagic-pin-space #pinContainer").removeClass("pos-fixed");
            $("#slideContainer").css("transform", `translate(${0}%, 0%) translate3d(0px, 0px, 0px)`);
          }


          if($(this).scrollTop() >= $('.scrollmagic-pin-space').offset().top + hei + 300) {
              $(".scrollmagic-pin-space").removeClass("scrollmagic-pin-space-offset");
              $(".scrollmagic-pin-space #pinContainer").removeClass("pos-fixed");
              $("#slideContainer").css("transform", `translate(${0}%, 0%) translate3d(0px, 0px, 0px)`);
          }
      });
      
  });
  return (
    <div className="our-solution-section">
      {/* <BannerTop />
            <Introduce /> */}
      <div class="content_1">
        <h1>First Page</h1>
      </div>
      <div className="scrollmagic-pin-space">
        <div id="pinContainer">
          <div id="slideContainer">
          <div className="solution panel">
            <div className="solution-inner">
              <div className="container">
                <div className="test" style={{backgroundColor: "black", width: "100%", height: "450px"}}></div>
              </div>
            </div>
          </div>
          <div className="solution panel">
            <div className="solution-inner">
              <div className="container">
                <div className="test" style={{backgroundColor: "#6bd0b1", width: "100%", height: "450px"}}></div>
              </div>
            </div>
          </div>
          <div className="solution panel">
            <div className="solution-inner">
              <div className="container">
                <div className="test" style={{backgroundColor: "grey", width: "100%", height: "450px"}}></div>
              </div>
            </div>
          </div>
          <div className="solution panel">
            <div className="solution-inner">
              <div className="container">
                <div className="test" style={{backgroundColor: "yellow", width: "100%", height: "450px"}}></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div class="content_3">
        <p>
          Senectus purus, molestie blandit sociis eu leo blandit platea commodo
          aptent scelerisque cursus. Hac vel himenaeos hendrerit eu
          pellentesque. Lorem natoque praesent dictum porta, aliquam bibendum
          laoreet class litora? Class nullam maecenas aliquet. Ligula, et enim
          vel rutrum luctus lorem orci fringilla in erat? Bibendum magnis nec
          volutpat non netus dignissim. Tempus tempor penatibus nulla egestas
          semper scelerisque cubilia. Nulla adipiscing per porta consequat et
          imperdiet posuere magna fringilla rhoncus conubia. Sapien proin
          euismod.
        </p>
        <p>
          Tempus luctus tempor donec pretium lectus leo facilisis leo, inceptos
          nostra lorem vel. Orci parturient urna etiam pharetra sit lacus
          volutpat id sed lacinia. Scelerisque ultrices nisi risus aenean
          tincidunt, amet arcu tempus id curabitur purus fringilla. Eros iaculis
          vitae vitae rutrum ultricies dolor sociis ante ante ut. Ut nibh primis
          himenaeos egestas dictumst congue scelerisque!
        </p>
        <p>
          Blandit sociis quisque ultrices montes tortor. Penatibus risus primis,
          senectus nam nostra. Egestas, nulla vitae penatibus cursus sed.
          Luctus, eget dignissim porttitor et curae; accumsan. Accumsan blandit
          ligula sollicitudin. Ligula mattis ad turpis arcu mus laoreet conubia
          risus accumsan quis lobortis. Nisi sollicitudin penatibus lacus nam
          justo id commodo sagittis. Leo orci.
        </p>

        <p>
          Fringilla sociosqu laoreet id, dui lobortis condimentum? Facilisis
          non, cubilia diam. Egestas aptent ornare et felis morbi senectus
          molestie, egestas donec himenaeos ultrices himenaeos. Condimentum
          conubia nisl urna lobortis pharetra adipiscing cras eget pellentesque
          sollicitudin faucibus. Scelerisque lobortis nascetur neque ac quam
          dignissim fames. Magnis pharetra dignissim nullam sapien eu curabitur,
          ridiculus dapibus. Aptent tempus nibh eget scelerisque magna ipsum
          turpis. Taciti nostra morbi pharetra montes sagittis posuere mollis.
        </p>
        <p>
          Taciti tortor phasellus placerat inceptos tristique consectetur
          accumsan vitae potenti sodales nulla eros. Dapibus scelerisque
          penatibus nisl accumsan ultricies ridiculus porta. Varius tellus erat
          laoreet morbi tempor tristique. Sapien, sem morbi libero dapibus
          curabitur. Facilisi habitasse feugiat semper magnis risus id tellus
          libero semper. Vehicula turpis elit lectus interdum metus ultrices
          mollis consectetur cubilia.
        </p>
        <p>
          Senectus purus, molestie blandit sociis eu leo blandit platea commodo
          aptent scelerisque cursus. Hac vel himenaeos hendrerit eu
          pellentesque. Lorem natoque praesent dictum porta, aliquam bibendum
          laoreet class litora? Class nullam maecenas aliquet. Ligula, et enim
          vel rutrum luctus lorem orci fringilla in erat? Bibendum magnis nec
          volutpat non netus dignissim. Tempus tempor penatibus nulla egestas
          semper scelerisque cubilia. Nulla adipiscing per porta consequat et
          imperdiet posuere magna fringilla rhoncus conubia. Sapien proin
          euismod.
        </p>

        <p>
          Tempus luctus tempor donec pretium lectus leo facilisis leo, inceptos
          nostra lorem vel. Orci parturient urna etiam pharetra sit lacus
          volutpat id sed lacinia. Scelerisque ultrices nisi risus aenean
          tincidunt, amet arcu tempus id curabitur purus fringilla. Eros iaculis
          vitae vitae rutrum ultricies dolor sociis ante ante ut. Ut nibh primis
          himenaeos egestas dictumst congue scelerisque!
        </p>
        <p>
          Blandit sociis quisque ultrices montes tortor. Penatibus risus primis,
          senectus nam nostra. Egestas, nulla vitae penatibus cursus sed.
          Luctus, eget dignissim porttitor et curae; accumsan. Accumsan blandit
          ligula sollicitudin. Ligula mattis ad turpis arcu mus laoreet conubia
          risus accumsan quis lobortis. Nisi sollicitudin penatibus lacus nam
          justo id commodo sagittis. Leo orci.
        </p>
        <p>
          Fringilla sociosqu laoreet id, dui lobortis condimentum? Facilisis
          non, cubilia diam. Egestas aptent ornare et felis morbi senectus
          molestie, egestas donec himenaeos ultrices himenaeos. Condimentum
          conubia nisl urna lobortis pharetra adipiscing cras eget pellentesque
          sollicitudin faucibus. Scelerisque lobortis nascetur neque ac quam
          dignissim fames. Magnis pharetra dignissim nullam sapien eu curabitur,
          ridiculus dapibus. Aptent tempus nibh eget scelerisque magna ipsum
          turpis. Taciti nostra morbi pharetra montes sagittis posuere mollis.
        </p>
        <p>
          Taciti tortor phasellus placerat inceptos tristique consectetur
          accumsan vitae potenti sodales nulla eros. Dapibus scelerisque
          penatibus nisl accumsan ultricies ridiculus porta. Varius tellus erat
          laoreet morbi tempor tristique. Sapien, sem morbi libero dapibus
          curabitur. Facilisi habitasse feugiat semper magnis risus id tellus
          libero semper. Vehicula turpis elit lectus interdum metus ultrices
          mollis consectetur cubilia.
        </p>
      </div>
    </div>
  );
}

export default OurSolution;
