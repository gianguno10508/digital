import React, { useEffect, useState } from "react";
// import bannerCaseStudies from '../asset/fakedata/casestudies/banner';
// import { itemCaseStudies, listCategory } from '../asset/fakedata/casestudies/itemCaseStudies';
import "../asset/styles/casestudies.css";
import Background1 from "../components/common/Background1";
import MainItems from "../components/ui/casestudies/MainItems";
import $ from "jquery";
import { getContentCaseStudies } from "../gql/case-studies";
import Loading from "../components/common/Loading";

function CaseStudies() {
  const [bannerCaseStudies, setBannerCaseStudies] = useState([]);
  const [caseList, setCaseList] = useState([]);
  const [menuItems, setMenuItems] = useState();

  const listCategory = [
    { category: "Magento" },
    { category: "WordPress" },
    { category: "Shopify" },
    { category: "Bigcommerce" },
    { category: "Headless & PWA" },
  ];
  const allCategories = [...new Set(listCategory.map((p) => p.category))];

  useEffect(() => {
    try {
      getContentCaseStudies().then(function (res) {
        // console.log(res.page.caseStudies.caseList);
        setCaseList(res.page.caseStudies.caseList);
        setMenuItems(res.page.caseStudies.caseList);
        const banner = {
          content: res.page.content,
          image: res.page.featuredImage.node,
        };
        setBannerCaseStudies(banner);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const filterCategory = (category) => {
    const newItems = caseList.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  // ------------------------------------------------
  $(document).ready(function () {
    var selector = ".case-studies-list-category ul li";

    $(selector).on("click", function () {
      $(selector).removeClass("active");
      $(this).addClass("active");
    });
  });

  return (
    <Loading
      arrayCheck={bannerCaseStudies}
      children={
        <div className="case-studies-section">
          <div className="case-studies-banner">
            {bannerCaseStudies.image && (
              <Background1 data={bannerCaseStudies} />
            )}
          </div>
          <div className="case-studies-page">
            <div className="case-studies-list-category">
              <ul>
                <li
                  className="case-studies-item-category active"
                  onClick={() => setMenuItems(caseList)}
                >
                  All
                </li>
                {allCategories.map((item, index) => (
                  <li
                    className="case-studies-item-category "
                    key={index}
                    onClick={() => filterCategory(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="container">
              <div className="case-studies-list-items">
                {menuItems !== undefined && menuItems.length > 0 ? (
                  menuItems.map((item, index) => (
                    <div className="case-studies-item" key={index}>
                      <MainItems data={item} />
                    </div>
                  ))
                ) : (
                  <p className="no-post">
                    Sorry, no posts matched your criteria.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default CaseStudies;
