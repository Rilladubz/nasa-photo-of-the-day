import React from 'react';
import './MainStyles.css';

const MainPage = props => {
    console.log(props);
    return(
        <div>
            <section className='wrapper'>
                <div className='imgWrapper'>
                    <h1>Date: {props.dataprops.date}</h1>
                    <img className='img' src={props.dataprops.url} alt='This is taken by Nasa'></img>
                    <p className='explanation'>{props.dataprops.explanation}</p>
                </div>
            </section>
        </div>
    );
};

export default MainPage;