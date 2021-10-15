import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imgURL, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", padding: "7px 7px" }}> {source} </span>

                    <img src={imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm" rel="noreferrer">Read more</a>
                    </div>
                </div >
            </div >
        )
    }
}

export default NewsItem
