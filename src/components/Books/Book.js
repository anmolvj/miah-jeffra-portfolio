import React from 'react'
import { Link } from 'gatsby'

export default ({
  id,
  bookPageLink,
  title,
  date,
  coverImage,
  description,
  reviews,
  linksToBuy,
}) => (
  <div className="is-parent column is-6" key={id}>
    <article className="tile is-child box notification">
      <p>
        <Link className="title has-text-primary is-size-4" to={bookPageLink}>
          {title} {coverImage} {description}
        </Link>
        <span> &bull; </span>
        <span className="subtitle is-size-5 is-block">{date}</span>
      </p>
      <p>
        <Link className="button" to={bookPageLink}>
          Keep Reading →
        </Link>
      </p>
    </article>
  </div>
)
