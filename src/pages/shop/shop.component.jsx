import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../../components/category/category.component';

const ShopPage = ({ match }) => (
  <div className='category'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;