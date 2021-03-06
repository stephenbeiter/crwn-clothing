import React from 'react';
import './collection-preview.styles.scss';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <div className='collection-preview'>
    <h1 className='title' onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items.filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);