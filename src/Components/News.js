import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import NewsItem from "./NewsItem";


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

    //Fetch Method
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`
    // let datas = await fetch(url);
    // let data = await datas.json()
    // setArticles(data.articles)
    // setTotalResults(data.totalResults)
    // setLoading(false)
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
      <h3 style={{ marginTop: 89, marginLeft: 20 }}>Top Headlines - {props.category} {loading && <LoadingSpinner />} </h3>
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

    </>
  );
}


export default News

News.defaultProps = {
  country: 'in',
  category: "general",
  pageSize: 16
}












