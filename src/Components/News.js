import axios from "axios";
import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'



class News extends Component {
  static defaultProps={
    country:'in',
    category:"general",
    pageSize:16
  }
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    this.setState({loading:true})
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    );

    this.setState({ articles: res.data.articles, 
      totalResult: res.data.totalResults,
      loading:false })
  }

  handleChangeNext = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))) {
      this.setState({loading:true})
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      );
      this.setState({
        page: this.state.page + 1,
        articles: res.data.articles,
        loading:false
      })

    }
  }

  handleChangePrevious = async () => {
    this.setState({loading:true})
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    );
    this.setState({
      page: this.state.page - 1,
      articles: res.data.articles,
      loading:false
    })
  }




  render() {
    return (
      <>
        <div className="container my-5">
          <h3 style={{ marginTop: 89 }}>Top Headlines - {this.props.category} {this.state.loading && <LoadingSpinner/>} </h3>
          {/* {this.state.loading && <LoadingSpinner/>} */}
          <div className="row" style={{marginLeft:24}}>
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-3" key={element.url}>
                <NewsItem author={element.author} date={element.publishedAt} title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 100) : ""} url={element.urlToImage} newsurl={element.url} />
              </div>
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button onClick={this.handleChangePrevious} disabled={this.state.page <= 1} className="btn btn-dark">Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} onClick={this.handleChangeNext} className="btn btn-dark">Next</button>
        </div>
      </>
    );
  }

}
export default News