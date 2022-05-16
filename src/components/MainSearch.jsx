import { Component } from 'react'
import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap'
import JobResult from './JobResult'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getResults } from '../slices/results/resultsSlice'

const mapStateToProps = (state) => ({
  jobsResults: state.results.jobs,
  jobsLoading: state.results.loading,
  jobsError: state.results.error,
})

const mapDispatchToProps = (dispatch) => ({
  getJobsProp: (query) => {
    dispatch(getResults(query))
  },
})

class MainSearch extends Component {
  state = {
    query: '',
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.getJobsProp(this.state.query)
  }

  render() {
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
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="type and press Enter"
              />
            </Form>
            {this.props.jobsLoading && (
              <Spinner variant="info" animation="border" className="ml-2" />
            )}
            {this.props.jobsError && (
              <Alert variant="danger" className="ml-2">
                ERROR
              </Alert>
            )}
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.props.jobsResults.map((jobData) => (
              <JobResult key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)
