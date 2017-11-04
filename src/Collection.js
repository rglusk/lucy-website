import React from 'react';
import Photo from './Photo';

const Collection = (props) => {
    return (
        <div>
            {props.images.map((photo) =>
                <Photo
                    key={photo.path} path={photo.path} description={photo.description} />
            )}
        </div>
    );
};

export default Collection;