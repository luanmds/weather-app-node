const React = require('react');
const DefaultLayout = require('../DefaultLayout');

const Page404 = (props) => {
    return (
        <DefaultLayout title="Not Found">
            <h5>Ops! The Page "{props.url}" Not Found</h5>
            <p>
                <a href="/" className="btn">Back to Home</a>
            </p>
        </DefaultLayout>
    );
}

module.exports = Page404;