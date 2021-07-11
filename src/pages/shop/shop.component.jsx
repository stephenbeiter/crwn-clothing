import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/spinner/spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionIsFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <div className='collection'>
        <Route exact path={`${match.path}`}
          render={props => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />} />
        <Route exact path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={isFetching} {...props} />} />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectCollectionIsFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);