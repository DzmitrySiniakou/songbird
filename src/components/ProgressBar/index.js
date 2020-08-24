import { connect } from 'react-redux';

import ProgressBar from './ProgressBar';

const mapStateToProps = ({ songBirdData: { level } }) => ({ level });

export default connect(mapStateToProps)(ProgressBar);
