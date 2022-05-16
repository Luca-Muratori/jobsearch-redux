import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { removeFromFavourites } from "../slices/favourites/favouritesSlice";
import { useDispatch, useSelector } from "react-redux";
// const mapStateToProps = (state) => state;

// const mapDispatchToProps = (dispatch) => ({
//   removeFromFavourites: (f) => {
//     dispatch(removeFromFavourites(f));
//   },
// });

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {favourites.list.map((f, i) => (
              <ListGroupItem key={i}>
                <StarFill onClick={() => dispatch(removeFromFavourites(f))} />
                <span>{f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
