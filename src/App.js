import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ImportedComponent } from 'components';
import reactimg from 'assets/images/react.png';

const App = () => {
    return (
        <div>
            <div className="image-holder">
                <img src={reactimg} className="top-image" />
            </div>
            <h1>React simple start kit</h1>
            <h2>Perfect kit for your next react project</h2>
            <h3>Features are included:</h3>
            <ul>
                <li>Hot module reload for CSS and React components</li>
                <li>Absolute path (forget about ../../../../)</li>
                <li>Lastest js features like <code>async/await</code>, <code>export Component from '/Component'</code></li>
                <li>Style loader (style-loader,postcss-loader)</li>
                <li>File loader (png, jpg, gif)</li>
            </ul>
            <ImportedComponent />
        </div>
    );
};

export default hot(App)