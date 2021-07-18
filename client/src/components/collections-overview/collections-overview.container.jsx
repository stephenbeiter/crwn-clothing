import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionIsFetching } from '../../redux/shop/shop.selectors';
import Spinner from '../spinner/spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;