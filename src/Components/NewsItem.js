import React from "react";


function NewsItem(props) {

    let { title, description, url, newsurl, author, date } = props;
    return (
        <>

            <div className="row">
                <div className="col-md-3 my-3">
                    <div className="card" style={{ width: "23rem" , left:-39 }} >
                        <img
                            src={!url ? "https://img.etimg.com/thumb/msid-95310960,width-1070,height-580,imgsize-34142,overlay-economictimes/photo.jpg" : url}
                            style={{ height: 200 }}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By - {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a  href={newsurl}  className="btn btn-sm btn-primary">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default NewsItem

// style={{ width: "23rem" , left:-39 }}