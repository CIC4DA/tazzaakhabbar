import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title,description,url,newsurl} = this.props;
    return (
      <div className="card">
        <img src={!url ? "https://media.istockphoto.com/vectors/world-news-flat-vector-icon-news-symbol-logo-illustration-business-vector-id929047972":url} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    )
  }
}

export default Newsitem