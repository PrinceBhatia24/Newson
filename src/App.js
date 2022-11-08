import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";

const App = (props) => {
  const apiKey = "01cb608311c147f7a72d2f1cd1148ae0";
  const pageSize = "16"
  const country = "in"
  

  return (
    <div>
      <Router>
        <Navbar/>

        <Switch>
          <Route exact path="/Newson">
            {" "}
            <News
              key="general"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"General"}
            />
          </Route>
          <Route exact path="/">
            {" "}
            <News
              key="general"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"General"}
            />
          </Route>
          <Route exact path="/sports">
            {" "}
            <News
              key="sports"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Sports"}
            />
          </Route>
          <Route exact path="/business">
            {" "}
            <News
              key="business"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Business"}
            />
          </Route>
          <Route exact path="/health">
            {" "}
            <News
              key="health"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Health"}
            />
          </Route>
          <Route exact path="/science">
            {" "}
            <News
              key="science"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Science"}
            />
          </Route>
          <Route exact path="/technology">
            {" "}
            <News
              key="technology"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Technology"}
            />
          </Route>
          <Route exact path="/entertainment">
            {" "}
            <News
              key="entertainment"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Entertainment"}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;

// import "./App.css";
// import React ,{useState,useEffect} from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import News from "./Components/News";
// import { Link } from "react-router-dom";
// import LoadingSpinner from "./Components/LoadingSpinner";
// import axios from "axios";
// import NewsItem from "./Components/NewsItem";

// const App = (props) => {
//   const [coun , setCoun] =useState("in")
//   const [cat , setCat] =useState("general")
//   const [loading, setLoading] = useState(false) 
//   const [page, setPage] = useState(1)
//   const [totalResults, setTotalResults] = useState(0)
//   const [articles, setArticles] = useState([])
//   const apiKey = "e61d86b6a1174866b569d2dd57e73549";
//   const pageSize = "16"
//   console.log(coun)

// const getData= async()=>{
  
//   setLoading(true)
//   const res = await axios.get(
//     `https://newsapi.org/v2/top-headlines?country=${coun}&category=${cat}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`
//     );
//     setLoading(false)
//     setTotalResults(res.data.totalResults)
//     setArticles(res.data.articles)
// }

// const handleChangeNext = async () => {
//   if (!(page + 1 > Math.ceil({ totalResults } / pageSize))) {
//     setLoading(true)
//     const res = await axios.get(
//       `https://newsapi.org/v2/top-headlines?country=${coun}&category=${cat}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`
//     );
//     setArticles(res.data.articles)
//     setPage(page + 1)
//     setLoading(false)
//   }
// }

// const handleChangePrevious = async () => {
//   setLoading(true)
//   const res = await axios.get(
//     `https://newsapi.org/v2/top-headlines?country=${coun}&category=${cat}&apiKey=${apiKey}&page=${page - 1}&pageSize=${pageSize}`
//   );
//   setArticles(res.data.articles)
//   setPage(page - 1)
//   setLoading(false)
// }


// useEffect(() => {
//   getData()
// }, [])


//   return (
//     <div>
//       <Router>
//         {/* <Navbar/> */}
//         <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
         
//           <div className="container-fluid">
//             <Link className="navbar-brand"  to="#">
//             <img src={process.env.PUBLIC_URL + '/images/p.jpg'} alt="Newson"   width="100" height="20" style={{marginLeft:20}}></img>
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="/sports"
//                   >
//                     Sports
//                   </link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="/entertainment"
//                   >
//                     Entertainment
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="/health"
//                   >
//                     Health
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="/science"
//                   >
//                     Science
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="/business"
//                   >
//                     Business
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link active"
//                     aria-current="page"
//                     to="/technology"
//                   >
//                     Technology
//                   </Link>
//                 </li>
//                 <li>
//                   <select className="form-select c1" aria-label="Default select example" >
                    
//                     <option value="in">India</option> 
//                     <option value="us">United State</option>
//                     <option value="ae">United arab emirates</option>
//                     <option value="nl">Netherland</option>
//                     <option value="br">Brazil</option>
//                   </select>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//         <Switch>
//           <Route exact path="/Newson">
//             {" "}
//             <News
//               key="general"
//               pageSize={pageSize}
//               apiKey={apiKey}
//               country={coun}
//               category={"General"}
//             />
//           </Route>
//           <Route exact path="/">
//             {" "}
//             <News
//               key="general"
//               pageSize={pageSize}
//               apiKey={apiKey}
//               country={coun}
//               category={"General"}
//             />
//           </Route>
//           <Route exact path="/sports">
//             {" "}
//             <News
//               key="sports"
//               pageSize={pageSize}
//               apiKey={apiKey}
//               country={coun}
//               category={"Sports"}
//             />
//           </Route>
//           <Route exact path="/business">
//             {" "}
//             <News
//               key="business"
//               pageSize={pageSize}
//               apiKey={apiKey}
//               country={coun}
//               category={"Business"}
//             />
//           </Route>
//           <Route exact path="/health">
//             {" "}
//             <News
//               key="health"
//               pageSize={pageSize}
//               apiKey={apiKey}
//               country={coun}
//               category={"Health"}
//             />
//           </Route>
//           <Route exact path="/science">
//             {" "}
//             <News
//               key="science"
//               pageSize={pageSize}
//               apiKey={apiKey}
//               country={coun}
//               category={"Science"}
//             />
//           </Route>
//           <Route exact path="/technology">
//             {" "}
//             <News
//               key="technology"
//               pageSize={pageSize}
//               apiKey={apiKey}
//               country={coun}
//               category={"Technology"}
//             />
//           </Route>
//           <Route exact path="/entertainment">
//             {" "}
//             <News
//               key="entertainment"
//               pageSize={pageSize}
//               apiKey={apiKey}
//               country={coun}
//               category={"Entertainment"}
//             />
//           </Route>
//         </Switch>
//       </Router>
//       <h3 style={{ marginTop: 89, marginLeft: 20 }}>Top Headlines  - {cat} {loading && <LoadingSpinner />} </h3>
//       <div className="container-fluid my-5 d-flex" id="sidebar">
//         {/* {this.state.loading && <LoadingSpinner/>} */}
//         {/* <SideBar/> */}
//         <div className="row" style={{ marginLeft: 24 }}>
//           {!loading && articles.map((element) => {
//             return <div className="col-md-3" key={element.url}>
//               <NewsItem author={element.author} date={element.publishedAt} title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 100) : ""} url={element.urlToImage} newsurl={element.url} />
//             </div>
//           })}
//         </div>
//       </div>
//       <div className="container d-flex justify-content-between">
//         <button onClick={handleChangePrevious} disabled={page <= 1} className="btn btn-dark">Previous</button>
//         <button disabled={page + 1 > Math.ceil(totalResults / pageSize)} onClick={handleChangeNext} className="btn btn-dark">Next</button>
//       </div>
//     </div>
    
    
//   );
// };
// export default App;
