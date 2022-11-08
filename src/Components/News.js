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
        <div className="offcanvas-body" >
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
              {/* <li><button class="btn" style="margin-left: 15px; background-color: #2874f0;"
                          data-bs-dismiss="offcanvas"><img
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS4wNjMgMWwxMi4zIDEyLjQyNW0uMDYzLTEyLjM2MkwxIDEzLjM2MyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIi8+PC9zdmc+"></button>
                  </li> */}
            </ul>
          </div>
          <form action="">
            <div>
              <ul
                style={{ marginTop: 80, listStyle: "none", marginLeft: "-35px" }}
              >
                <li>
                  <h4>Login to check your account</h4>
                </li>
                <li>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                      Enter Email:
                    </label>
                    <input
                      type="email"
                      placeholder=" Enter Email"
                      className="form-control"
                      id="email"
                      name="email"
                      required=""
                    />
                  </div>
                </li>
                <li>
                  <div className="mb-1">
                    <label htmlFor="password" className="form-label">
                      Enter Password:
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control mb-5"
                      id="password"
                      name="password"
                      required=""
                    />
                  </div>
                </li>
                <li>
                  <p
                    style={{
                      fontSize: 13,
                      cursor: "default",
                      textAlign: "center"
                    }}
                  >
                    By Continuing, you agree to flipkart's
                    <span className="text-primary">Term of Use</span> and{" "}
                    <span className="text-primary">Privacy</span>
                  </p>
                </li>
                <li>
                  <div className="container-fluid text-center">
                    <button
                      className="btn btn-primary px-5"
                      type="submit"
                      id="loginbtn2"
                      style={{ backgroundColor: "#fb641b" }}
                    >
                      Login
                    </button>
                  </div>
                </li>
                <li>
                  <p style={{ textAlign: "center", marginTop: 20, fontSize: 20 }}>
                    Or
                  </p>
                  <div className="container-fluid text-center bg-light">
                    <button
                      className="btn btn-light text-primary px-4 pt-2"
                      type="button"
                    >
                      Request OTP
                    </button>
                    <hr />
                  </div>
                </li>
                <li>
                  <center>
                    {" "}
                    <a
                      className="m-3"
                      // onClick={DisplayChange2}
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontSize: 13
                      }}
                    >
                      New to Flipkart ? Create an account
                    </a>
                  </center>
                </li>
              </ul>
            </div>
          </form>
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












