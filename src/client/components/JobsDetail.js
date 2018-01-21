import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJob } from '../actions';
import { Link } from 'react-router-dom';

// const mapStateToProps = (state, ownProps) => ({
//     ...ownProps,
//     job: state.job
// });

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...ownProps,
        job: state.job
    }
};

class JobsDetail extends Component {

    componentWillMount() {
        console.log('wtf', this.props.match.params.slug)
        this.props.getJob(this.props.match.params.slug);
    }

    render() {
        return (
            <div>JOB</div>
        );
    }

}


// const loadData = (store) => (
//     store.dispatch(getJob())
// );

const loadData = (store, slug) => (
    store.dispatch(getJob(slug))
);

export default {
    loadData,
    component: connect(mapStateToProps, { getJob })(JobsDetail)
};
