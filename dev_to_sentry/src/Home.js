import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <section id='Home' className='home-split-container'>
            <div className='site-title home-left-col'>
                <article className='home-split-article'>
                    <span className='home-text'>Find the team to travel your road</span>
                </article>
            </div>
            <div className='home-right-col img-bg'>
                <article className='split-article-tagline'>
                    <span className='home-text-right'>DSentr</span>
                    <span className='home-tagline'>Bringing Devs and Entrepenuers Together</span>
                </article>
            </div>
            </section>
        );
    }
}
export default Home;