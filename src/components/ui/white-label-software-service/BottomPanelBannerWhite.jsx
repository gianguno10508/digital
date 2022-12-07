import ScrollEffect from "../../common/ScrollEffect";

const BottomPanelBannerWhite = () => {
  return (
    <div className="bottom_panel_banner-section">
      <div className="container">
        <div className="wapper">
          <ScrollEffect
            children={
              <h2 className="bottom_panel_banner-title">
                Ready to experience first-rate service quality with us?
              </h2>
            }
          />
          <p className="bottom_panel_banner-description">
            Outsource IT Services with the Most Talented Engineers in the
            Industry
          </p>
          <div className="button-more">
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomPanelBannerWhite;
