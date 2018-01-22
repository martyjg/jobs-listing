import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions';
import { Helmet } from 'react-helmet';
import ListingItem from './ListingItem';
import styled from 'styled-components';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    jobs: state.jobs
});

class JobsList extends Component {

    componentDidMount() {
        if (!this.props.jobs.length)
        this.props.loadData();
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Jobs Listing</title>
                    <meta property="og:type" content='Job Board' />
                </Helmet>
                <ul>
                    {this.props.jobs.map((job) => (
                        <ListingItem content={job} key={job.id} />
                    ))}
                </ul>
            </div>
        );
    }

}

export default {
    component: connect(mapStateToProps, { loadData })(JobsList)
};
