import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export default function News({ country, category, noOfArticle, setProgress }) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setotalResults] = useState(0);

    // const updateNews = async () => {
    //     setProgress(10);
    //     let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4d6ea24b174441a397e6ba315a1fe74e&pageSize=${noOfArticle}&page=${page}`;

    //     let data = await fetch(url);
    //     setProgress(50);
    //     let parsedData = await data.json();
    //     console.log(parsedData)
    //     // setProgress(80);

    //     // setArticles(parsedData.article);
    //     // setLoading(false);
    //     // setotalResults(parsedData.totalResults);

    //     // setProgress(100);
    // }

    // useEffect(() => {
    //     updateNews();
    // });
    

    React.useEffect(() => {
        console.log("Inside use effect")
        console.log(page);
        setProgress(10);
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=22d7fbe3092f47fb82f20a56b78a0b48&pageSize=${noOfArticle}&page=${page}`).then((response) => {
        
          setProgress(50);
          
          const mergedObject = {
            ...articles,
            ...response.data.articles
          };
          const mergedArray=Object.values(mergedObject)
         
         
          setArticles(mergedArray);
          setProgress(100);
          setLoading(false);
        
        });
      }, [page]);

      function increasePage(){
          console.log("Trying to increase pages")
          setPage(page+1);
      }







    return (
        <div>
            <h2 className="my-5 text-center"
                style={{ marginTop: "150px" }}
            >{category.charAt(0).toUpperCase() + category.slice(1) + " News"}</h2>
            {loading && <Spinner />} {console.log(articles)}

            <InfiniteScroll
                dataLength={articles.length}
                next={() => {
                     increasePage();
                }}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row" style={{ marginTop: "20px" }}>
                        {articles.length>0 && articles.map((article) => {
                            {console.log("Is it even coming here?")}
                            return (
                                <div className="col-md-4" key={article.url}>

                                    <NewsItem
                                        title={article.title}
                                        description={article.description}
                                        imgURL={article.urlToImage}
                                        newsUrl={article.url}
                                        author={article.author ? article.author : "Unknown"}
                                        date={article.publishedAt}
                                        source={article.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </div>
    )
}

News.propTypes = {
    country: "in",
    noOfArticle: 6,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    noOfArticle: PropTypes.number,
    category: PropTypes.string
}
