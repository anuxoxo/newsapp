import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

    static propTypes = {
        country: "in",
        noOfArticle: 8,
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
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    async updateNews(page) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e94faefb8fd4c7db2431a0dba5bf8ad&pageSize=${this.props.noOfArticle}&page=${page}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }
    async componentDidMount() {
        this.updateNews(this.state.page);
    }

    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews(this.state.page - 1);

    }

    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews(this.state.page + 1);
    }

    render() {
        return (
            <div className="container my-6 mt-4">
                <h2 className="my-5 text-center">{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " News"}</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((article) => {
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

                    <div className="container d-flex justify-content-between my-5">
                        <button type="button" className="btn btn-dark"
                            disabled={this.state.page <= 1}
                            onClick={this.handlePrevClick}
                        >&larr; Previous</button>
                        <button type="button" className="btn btn-dark"
                            onClick={this.handleNextClick}
                            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.noOfArticle)}
                        >Next &rarr;</button>

                    </div>
                </div>

            </div >
        )
    }

}