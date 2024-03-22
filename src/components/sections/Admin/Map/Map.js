import React from 'react';
import CenteredContentPage from '../../../widget&items/Container/MyContainer';

function Map(props) {
    return (
        <div>
            <h1>Ici c'est la map</h1>
        </div>
    );
}

export default function MapPage(){
    return <CenteredContentPage content={<Map />}/>
};