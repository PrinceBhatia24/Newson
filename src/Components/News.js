import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import NewsItem from "./NewsItem";
import { NavLink } from "react-router-dom";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const getData = async () => {
    setLoading(true)
    //Axios..
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`
    );
    setArticles(res.data.articles)
    setTotalResults(res.data.totalResults)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleChangeNext = async () => {
    if (!(page + 1 > Math.ceil({ totalResults } / props.pageSize))) {
      setLoading(true)
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
      );
      setArticles(res.data.articles)
      setPage(page + 1)
      setLoading(false)
    }
  }

  const handleChangePrevious = async () => {
    setLoading(true)
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`
    );
    setArticles(res.data.articles)
    setPage(page - 1)
    setLoading(false)
  }

  return (
    <>
      <a
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
        style={{ position: "absolute", left: 53, top: 93, listStyleType: "none" }}

      >
        <li>
          <div className="div"></div>
          <div className="div"></div>
          <div className="div "></div>
        </li>
      </a>
      <h3 style={{ marginTop: 89, marginLeft: 65 }}>Top Headlines - {props.category} {loading && <LoadingSpinner />} </h3>
      <div className="container-fluid my-5 d-flex" id="sidebar">
        {/* {this.state.loading && <LoadingSpinner/>} */}
        {/* <SideBar/> */}
        <div className="row" style={{ marginLeft: 24 }}>
          {!loading && articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem author={element.author} date={element.publishedAt} title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 100) : ""} url={element.urlToImage} newsurl={element.url} />
            </div>
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button onClick={handleChangePrevious} disabled={page <= 1} className="btn btn-dark">Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={handleChangeNext} className="btn btn-dark">Next</button>
      </div>
      <div className="offcanvas offcanvas-start bg-light text-dark" id="offcanvas" style={{ width: 300 }}>
        <div className="offcanvas-body">
          <div
            style={{ backgroundColor: "rgb(33 37 41)", position: "absolute", left: 0, top: 0, height: 56 }}
            className="container-fluid"
          >
            <ul className="flex3 mt-2 mb-2">
              <li>
                <img
                  src={process.env.PUBLIC_URL + '/images/p.jpg'} alt="Newson" height="20"
                  style={{ marginLeft: 26 }}
                  width="140px"

                />
              </li>
            </ul>
          </div>
          <div>
            <div className='container2' style={{ marginRight: 20 }}>
              <div className="box1">
                <ul className="list-group mt-1">
                  <div id='m2' style={{ width: 272 }}>

                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Vestibulum at eros</li>

                  </div>
                </ul>
                <ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default News

News.defaultProps = {
  country: 'in',
  category: "general",
  pageSize: 16
}












