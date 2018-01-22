import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getJobBySlug } from '../reducers';
import { Helmet } from 'react-helmet';


const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        job: getJobBySlug(state, ownProps.match.params.slug)
    }
};

class JobsDetail extends Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.props.job.title}</title>
                    <meta property="og:type" content='Job Posting' />
                </Helmet>
                {this.props.job.title}
            </div>
        );
    }

}

export default {
    component: connect(mapStateToProps)(JobsDetail)
};
