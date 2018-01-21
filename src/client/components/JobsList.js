import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../actions';

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    }
}

class JobsList extends Component {

    componentDidMount() {
        this.props.getJobs();
    }

    renderJobs() {
        return this.props.jobs.map(job => {
            return <li key={job.id}>{job.title}</li>;
        });
    }

    render() {
        return (
            <div>
                Here's a big list of users:
                <ul>
                    {this.renderJobs()}
                </ul>
            </div>
        );
    }

}

export default connect(mapStateToProps, { getJobs })(JobsList);
