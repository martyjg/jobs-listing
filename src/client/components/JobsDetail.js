import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getJobBySlug } from '../reducers';


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        job: getJobBySlug(state, ownProps.match.params.slug)
    }
};

class JobsDetail extends Component {

    render() {
        return (
            <pre>
                {this.props.job.title}
            </pre>
        );
    }

}

export default {
    component: connect(mapStateToProps)(JobsDetail)
};
