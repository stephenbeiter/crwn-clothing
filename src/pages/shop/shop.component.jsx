import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='collection'>
    <Route exact path={`${match.path}`}
      component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`}
      component={CollectionPage} />
  </div>
);

export default ShopPage;