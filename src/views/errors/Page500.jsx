const React = require('react');
const DefaultLayout = require('../DefaultLayout');

const Page500 = (props) => {
    return (
        <DefaultLayout title="Not Found">
            <h5>{props.message}</h5>
            <p>
                <a href="/" className="btn">Back to Home</a>
            </p>
        </DefaultLayout>
    );
}

module.exports = Page500;