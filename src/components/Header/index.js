import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = ({ songBirdData: { score } }) => ({ score });

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Header);
