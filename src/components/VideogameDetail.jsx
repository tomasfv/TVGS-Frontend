import React from "react";
import { useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getDetail, cleanDetail} from "../actions";
import './VideogameDetail.css';

export default function VideogameDetail(){
    const dispatch = useDispatch();
    const param = useParams();
    const history = useHistory();
    const detail = useSelector ((state) => state.detail);

    useEffect(() => {
        dispatch(getDetail(param.id));                  
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => dispatch(cleanDetail());                         //Component WillUnmount
    }, [dispatch, param.id])

    function handleBack(e){
        e.preventDefault();
        dispatch(cleanDetail());
        history.push('/Home');                        
    }


    return (
        <div>
            <div>
                {
                    detail.length > 0 ?
                    <div>
                        {/* {detail[0].screenshots.map(el => <img src={el} alt="img not found" key={el} width="150px" height="75px" />)} */}
                        <img src={detail[0].image} alt="img not found" width="750px" height="500px"/>
                        <div className="details-container">
                            <div>
                            <div className="grid-container">
                                <h1 className="title-detail">{detail[0].name.toUpperCase()}</h1>
                                <h4 className="description-detail">{detail[0].description}</h4>
                                
                                <div className="dev-detail">
                                    <div className="data-field">    
                                        <h3>DEVELOPERS</h3>
                                        <div className="platforms-container">{detail[0].developers.map(el => <h4 className="detail-info" key={el}>{el}</h4> )}</div>
                                    </div>
                                    <div className="data-field">
                                        <h3>PUBLISHERS</h3>
                                        <div className="platforms-container">{detail[0].publishers.map(el => <h4 className="detail-info" key={el}>{el}</h4>)}</div>
                                    </div>
                                    <div className="data-field">
                                        <h3>WEBSITE</h3>
                                        <h3><a href={detail[0].website} target="_blank" rel="noreferrer" className="back-button">{detail[0].name}</a></h3>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                            <div className="data-container">
                                <div className="data-field">
                                    <h3>PLATFORMS</h3>
                                    <div className="platforms-container">{detail[0].platforms.map(el => <h4 className="detail-info" key={el}>{el}</h4>)}</div>
                                </div>
                                <div className="data-field">
                                    <h3>STORES</h3>
                                    <div className="platforms-container">{detail[0].stores.map(el => <h4 className="detail-info" key={el}>{el}</h4>)}</div>
                                </div>
                                <div className="data-field">
                                    <h3>GENRES</h3>
                                    <div className="platforms-container">{detail[0].genres.map(el => <h4 className="detail-info" key={el}>{el}</h4>)}</div>
                                </div>
                                <div className="data-field">
                                    <h3>RELEASE DATE</h3>
                                    <h3 className="detail-info">{detail[0].released}</h3>
                                </div>
                                <div className="data-field">
                                    <h3>RATING</h3>
                                    <h3 className="detail-info">{detail[0].rating} / 5</h3>
                                </div>
                            </div>
                                <button className="back-button" onClick={ e => handleBack(e)}>← Back</button>
                        </div>
                    </div> : <span className="loader"></span>
                }
            </div>
    
        <div>
        </div>
        </div>
    )
}