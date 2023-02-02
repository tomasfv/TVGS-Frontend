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
    }, [dispatch])

    function handleBack(e){
        e.preventDefault();
        dispatch(cleanDetail());
        history.push('/Home');                        
    }

    
    return (
        <div>
            <h1>VIDEO GAME DETAIL</h1>
            
            <div>
                {
                    detail.length > 0 ?
                    <div>
                        <h1 className="detail-title">{detail[0].name.toUpperCase()}</h1>
                        {detail[0].screenshots.map(el => <img src={el} alt="img not found" key={el} width="150px" height="75px" />)}
                        <img src={detail[0].image} alt="img not found" width="750px" height="500px"/>
                        <h4>{detail[0].description}</h4>
                        <h3>Release Date: {detail[0].released}</h3>
                        <h3>Rating: {detail[0].rating} / 5</h3>
                        <h3>ID: {detail[0].id}</h3>
                        <a href={detail[0].website} target="_blank" rel="noreferrer"><h3>Website: {detail[0].website}</h3></a>
                        
                        <h3>PLATFORMS</h3>
                        <div className="platforms-container">{detail[0].platforms.map(el => <h4 className="detail-info" key={el}>{el}</h4>)}</div>
                        <h3>STORES</h3>
                        <div className="platforms-container">{detail[0].stores.map(el => <h4 className="detail-info" key={el}>{el}</h4>)}</div>
                        <h3>GENRES</h3>
                        <div className="platforms-container">{detail[0].genres.map(el => <h4 className="detail-info" key={el}>{el}</h4>)}</div>
                        <h3>DEVELOPERS</h3>
                        <div className="platforms-container">{detail[0].developers.map(el => <h4 className="detail-info" key={el}>{el}</h4> )}</div>
                        <h3>PUBLISHERS</h3>
                        <div className="platforms-container">{detail[0].publishers.map(el => <h4 className="detail-info" key={el}>{el}</h4>)}</div>
                        <button className="volver" onClick={ e => handleBack(e)}>BACK</button>
                        
                    </div> : <h1>Loading...</h1>
                }
            </div>
    
        <div>
        </div>
        </div>
    )
}