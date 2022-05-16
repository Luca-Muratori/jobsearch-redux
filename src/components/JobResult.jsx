import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from 'react-bootstrap-icons'
import {
  addToFavourites,
  removeFromFavourites,
} from '../slices/favourites/favouritesSlice'
import { connect } from 'react-redux'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (company) => dispatch(addToFavourites(company)),
  removeFromFavourites: (company) => dispatch(removeFromFavourites(company)),
})

const JobResult = ({
  data,
  favourites,
  addToFavourites,
  removeFromFavourites,
}) => {
  const isFav = favourites.list.includes(data.company_name)
  const toggleFavourite = () => {
    isFav
      ? removeFromFavourites(data.company_name)
      : addToFavourites(data.company_name)
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex">
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(JobResult)
