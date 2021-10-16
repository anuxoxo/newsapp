import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    static propTypes = {
        country: "in",
        noOfArticle: 6,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        noOfArticle: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }
    async updateNews(page) {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=181bdd8ab4ed407ebc553087ecc23297&pageSize=${this.props.noOfArticle}&page=${page}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(80);

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);

    }
    async componentDidMount() {
        this.updateNews(this.state.page);
    }


    fetchMoreData = async (page) => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=181bdd8ab4ed407ebc553087ecc23297&pageSize=${this.props.noOfArticle}&page=${page}`;

        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
            page: this.state.page + 1
        });

    };

    render() {
        return (
            <>
                <h2 className="my-5 text-center">{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " News"}</h2>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={() => {
                        this.fetchMoreData(this.state.page + 1)
                    }}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">

                        <div className="row" style={{ marginTop: "20px" }}>
                            {this.state.articles.map((article) => {
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

            </ >
        )
    }

}