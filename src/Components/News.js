import React, { useState, useEffect } from "react";
import axios from "axios";


function News() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=096d0e8851b744b6b16be646c0eb0eb7"
    );
    setUsers(res.data.articles);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div>
        <div className="container my-3">
          <h1>Top Headlines</h1>
          <div className="row">
            {users.map((element) => {
              return (
                <div className="col-md-3 my-3" key={element.url}>
                  <div>
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={element.urlToImage}
                        style={{ height: 200 }}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{element.title}...</h5>
                        <p className="card-text">{element.description}...</p>
                        <a
                          href={element.url}
                          className="btn btn-sm btn-primary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}



export default News;