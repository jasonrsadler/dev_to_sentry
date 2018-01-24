import React, {Component} from 'react';
import Devs from '../containers/Devs';
import How from '../containers/How';

class Home extends Component {
    render() {
        return (
            <div>
                <main className='wrapper'>
                    <section id='Home' className='home-split-container parallax img-bg'>
                        <div className='site-title home-left-col'>
                            <article className='home-split-article'>
                                <span className='home-text'>Find the team to travel your road</span>
                            </article>
                        </div>
                        <div className='home-right-col'>
                            <article className='split-article-tagline'>
                                <span className='home-text-right'>DSentr</span>
                                <span className='home-tagline'>Bringing Devs and Entrepenuers Together</span>
                            </article>
                        </div>
                    </section>
                    <section id="section-1" className="split-container" name="split">
                        <Devs />
                        <How />                    
                    </section>   
                </main>
                         
            </div>
            
        );
    }
}
export default Home;