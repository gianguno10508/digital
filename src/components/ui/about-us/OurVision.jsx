import React from 'react';


function OurVision({ ourVision }) {
    return (
        <div class="item-inner row">
            <div class="image-feature col-sm-12 col-md-6">
                <div class="image">
                    {
                        ourVision.image && <img src={ourVision.image.sourceUrl} alt="" class="banner-image" />
                    }


                </div>
            </div>
            <div class="content-right col-sm-12 col-md-6">
                <div class="title">
                    <h2>{ourVision.title} </h2>
                </div><div class="description">
                    <p>{ourVision.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurVision;