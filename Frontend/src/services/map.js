
import { connect } from 'react-redux';

import { LandingPage } from '../pages';

//useSelector
const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch({ type: 'INCREMENT' }),
  sub: () => dispatch({ type: 'DECREMENT' }),
});


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
