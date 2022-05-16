import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import JobResult from "./JobResult";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getResults } from "../slices/results/resultsSlice";

// const mapStateToProps = (state) => ({
//   jobsResults: state.results.jobs,
//   jobsLoading: state.results.loading,
//   jobsError: state.results.error,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getJobsProp: (query) => {
//     dispatch(getResults(query));
//   },
// });

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const jobsResults = useSelector((state) => state.results.jobs);
  const jobsLoading = useSelector((state) => state.results.loading);
  const jobsError = useSelector((state) => state.results.error);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getResults(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Link to="/favourites" className="btn btn-primary">
            Favourites
          </Link>
        </Col>
        <Col xs={10} className="mx-auto d-flex align-items-center">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
          {jobsLoading && (
            <Spinner variant="info" animation="border" className="ml-2" />
          )}
          {jobsError && (
            <Alert variant="danger" className="ml-2">
              ERROR
            </Alert>
          )}
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsResults.map((jobData) => (
            <JobResult key={uniqid()} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
