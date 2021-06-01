import React, { Component } from 'react';
import Layout from '../components/layout';

class Calendar extends Component {
    render() {
        return (
            <Layout>
                <div>
                    Calendar
<div class="calendly-inline-widget" data-url="https://calendly.com/mikedcameron" ></div>
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                </div></Layout>
        );
    }
}

export default Calendar;