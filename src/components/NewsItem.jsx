import React from 'react'
import noPhoto from '../no-photo.png'

export default function NewsItem({ title, description, imgURL, newsUrl, author, date, source }) {
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "10%", padding: "7px 7px", zIndex: "3" }}> {source} </span>

                <img src={imgURL ? imgURL : noPhoto} className="card-img-top" alt="..." />
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