import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import contentLeft from '../asset/fakedata/detail/ContentLeft';
import "../asset/styles/detail.css";
import Loading from "../components/common/Loading";
import LeftDetail from "../components/ui/Detail/LeftDetail";
import RightDetail from "../components/ui/Detail/RightDetail";
import { getContentCaseStudies } from "../gql/case-studies";

function Detail() {
  const { title } = useParams();
  const [caseList, setCaseList] = useState([]);
  const [listCategory, setListcategory] = useState([]);
  const [lastestNews, setLastestNews] = useState([]);
  // console.log(listCategory);
  useEffect(() => {
    try {
      getContentCaseStudies().then(function (res) {
        setLastestNews(res.page.caseStudies.lastestNews);
        setCaseList(res.page.caseStudies.caseList);
        setListcategory(res.page.caseStudies.listCategory);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const thisContent =
    caseList.find((product) => String(product.title) === title) || {};
  const thisLastestNew =
    lastestNews.find((product) => String(product.title) === title) || {};
  // console.log(thisLastestNew);
  return (
    <Loading
      arrayCheck={lastestNews}
      children={
        <div className="detail-section">
          <div className="container">
            <div className="row">
              {thisContent && (
                <LeftDetail
                  data={thisContent}
                  dataLastestNew={thisLastestNew}
                />
              )}
              {listCategory && (
                <RightDetail
                  listCategory={listCategory}
                  lastestNews={lastestNews}
                />
              )}
            </div>
          </div>
        </div>
      }
    />
  );
}

export default Detail;
