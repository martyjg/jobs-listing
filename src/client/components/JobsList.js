import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    jobs: state.jobs
});

class JobsList extends Component {

    componentDidMount() {
        if (!this.props.jobs.length)
        this.props.loadData();
    }

    renderJobs() {
        return this.props.jobs.map(job => (
            <li key={job.id}>
                <Link to={`/jobs/${job.slug}`}>
                    {job.title}
                </Link>
            </li>
        ));
    }

    render() {
        return (
            <div>
                Here's a big list of jobs:
                <ul>
                    {this.renderJobs()}
                </ul>
            </div>
        );
    }

}

export default {
    component: connect(mapStateToProps, { loadData })(JobsList)
};
