import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    jobs: state.jobs
})

class JobsList extends Component {

    componentDidMount() {
        this.props.getJobs();
    }

    renderJobs() {
        return this.props.jobs.map(job => {
            return (
                <li key={job.id}>
                    <Link to={`/${job.id}`}>
                        {job.title}
                    </Link>
                </li>
            );
        });
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

const loadData = (store) => {
    return store.dispatch(getJobs());
};

export default {
    loadData,
    component: connect(mapStateToProps, { getJobs })(JobsList)
};
