import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News({ country, category, noOfArticle, setProgress }) {

    // eslint-disable-next-line no-unused-vars
    const [articles, setArticles] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4d6ea24b174441a397e6ba315a1fe74e&pageSize=${noOfArticle}&page=${page}`;

        let data = await fetch(url);
        setProgress(50);

        let parsedData = await data.json();
        setProgress(80);

        setArticles((prev) => [...prev, ...parsedData.articles]);
        setLoading(false);
        setTotalResults(parsedData.totalResults);

        setProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        console.log(articles);

    }, [articles]);
    useEffect(() => {
        console.log(totalResults);

    }, [totalResults]);



    function increasePage() {
        setPage(page + 1);
    }
    useEffect(() => {
        console.log("page:", page);
    }, [page])

    return (
        <div>
            <h2 className="my-5 text-center"
                style={{ marginTop: "150px" }}
            >{category.charAt(0).toUpperCase() + category.slice(1) + " News"}</h2>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={totalResults}
                next={() => {
                    increasePage();
                }}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                endMessage={
                    <div style={{ textAlign: 'center' }}>
                        <br />
                        <b>Yay! You have seen it all</b>
                        <br />
                    </div>}
            >
                <div className="container">

                    <div className="row" style={{ marginTop: "20px" }}>
                        {articles?.length > 0 && articles?.map((article) => {
                            return (
                                <div className="col-md-4"
                                    key={article.url}
                                >
                                    <NewsItem
                                        key={article.url}
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
            </InfiniteScroll >

        </div >
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
