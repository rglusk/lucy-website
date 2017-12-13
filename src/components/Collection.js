import React from 'react';
import Photo from './Photo';

const Collection = props => {
    const { collectionInformation } = props;
    return (
        <div>
            {collectionInformation.photos.map(photo => (
                <Photo
                    key={photo.path}
                    path={photo.path}
                    title={collectionInformation.title}
                    description={collectionInformation.description}
                />
            ))}
        </div>
    );
};

export default Collection;
