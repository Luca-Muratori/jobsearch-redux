import { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { removeFromFavourites } from '../slices/favourites/favouritesSlice'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (f) => {
    dispatch(removeFromFavourites(f))
  },
})

class Favourites extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {this.props.favourites.list.map((f, i) => (
                <ListGroupItem key={i}>
                  <StarFill
                    onClick={() => this.props.removeFromFavourites(f)}
                  />
                  <span>{f}</span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
