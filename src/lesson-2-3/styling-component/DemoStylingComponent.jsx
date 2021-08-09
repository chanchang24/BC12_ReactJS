import React, { Component } from 'react'
// External style
import './ExternalStyle.css';

// Styling with module
import classes from './StylingWithModule.module.css';
// classes là object

export default class DemoStylingComponent extends Component {
    render() {
        // Style là object
        const headingStyles = { 
            backgroundColor: 'red', 
            color: 'white' 
        };

        return (
            <div>
                {/* Inline style */}
                <h1 style={headingStyles}>Demo Inline Style</h1>

                {/* External style */}
                <h1 className="heading">Demo External Style</h1>

                 {/* Styling with module */}
                 <h1 className={classes.blueBackground}>Demo Styling With Module</h1>
            </div>
        )
    }
}
