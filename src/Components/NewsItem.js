import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
        let { title, description, url, newsurl } = this.props;
        return (
            <>
                <div className="row">
                    <div className="col-md-3 my-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={!url ? "https://img.etimg.com/thumb/msid-95310960,width-1070,height-580,imgsize-34142,overlay-economictimes/photo.jpg" : url}
                                style={{ height: 200 }}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{title}...</h5>
                                <p className="card-text">{description}...</p>
                                <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}