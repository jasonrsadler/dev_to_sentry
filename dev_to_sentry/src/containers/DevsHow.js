import React, { Component } from 'react';
import Devs from './Devs';
import How from './How';

class DevsHow extends Component {
    render() {
        return (
            <section id="section-1" className="split-container" name="split">
                <Devs />
                <How />                    
            </section>
        );
    }
}
export default DevsHow;