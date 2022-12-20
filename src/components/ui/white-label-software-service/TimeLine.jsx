import { Markup } from "interweave";
import $ from "jquery";
const TimeLine = ({ data }) => {
    $(function () {

        $.fn.isInViewport = function () {
            var elementTop = $(this).offset().top;

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            return elementTop < viewportBottom;
        };

        var indexItem = '';
        var indexItemTime = '';
        $(window).on('resize scroll change orientationchange', function () {
            if ($('.questions-section .question').length > 0) {
                $('.questions-section .question').each(function () {
                    var thisItem = $(this);
                    indexItem = thisItem.index();
                    indexItemTime = indexItem * 500 + 500;
                    if (thisItem.isInViewport()) {
                        setTimeout(function () {
                            thisItem.addClass('run-line');
                            setTimeout(function () {
                                thisItem.addClass('show-content');
                            }, 500);
                        }, indexItem * 500);
                    }
                })
            }
            if ($('.introduce-inner').length > 0) {
                if ($('.introduce-inner').isInViewport()) {
                    setTimeout(function () {
                        $('.introduce-inner').addClass('run-line');
                        setTimeout(function () {
                            $('.introduce-inner').addClass('show-content');
                        }, 500)
                    }, indexItemTime)
                }
            }

        });
    })
    return (
        <div className="section-introduce-inner">
            <div className="questions-section">
                <div className="container">
                    {
                        data.listTimeLine &&
                        data.listTimeLine.map((item, index) => (
                            <div className="question" key={index}>
                                <div className="item">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="container">
                {
                    data.timeLineResult ? (
                        <div className="introduce-inner">
                            <div className="cicle"></div>
                            <div className="content">
                                <Markup content={data.timeLineResult} />
                            </div>
                        </div>
                    ) : (null)

                }
            </div>
        </div>


    )
}
export default TimeLine;