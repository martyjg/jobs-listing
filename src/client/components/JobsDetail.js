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

const placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum mi dui, quis ornare magna mattis in. Donec libero eros, sollicitudin nec vehicula ac, facilisis maximus nunc. Vivamus quis urna sodales, convallis urna et, bibendum erat. Nunc varius arcu sit amet lorem tincidunt tincidunt. Ut faucibus libero id elit mattis, sed varius est tempus. Nunc varius scelerisque metus, quis lobortis eros pellentesque eu. Maecenas ante lorem, congue nec mi eget, lobortis gravida sapien. Donec a eros fringilla, tincidunt justo eu, laoreet diam. Praesent tincidunt egestas tortor eget venenatis. Sed eleifend libero eu tortor fermentum, et consectetur nulla ornare.'

class JobsDetail extends Component {

    render() {
        const { job } = this.props;
        return (
            <div>
                <Helmet>
                    <title>{job.title}</title>
                    <meta property="og:type" content='Job Posting' />
                </Helmet>
                <h2 dangerouslySetInnerHTML={{__html: job.title}} />
                <h3 dangerouslySetInnerHTML={{__html: job.location}} />
                <p>Salary: {job.salary ? job.salary : 'Not Specified'}</p>
                <p dangerouslySetInnerHTML={{__html: placeholder}} />
                <Link to='/jobs'>← Back to Listing</Link>
            </div>
        );
    }

}

export default {
    component: connect(mapStateToProps)(JobsDetail)
};
