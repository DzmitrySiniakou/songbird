import { connect } from 'react-redux';

import CongratulationsBlock from './CongratulationsBlock';
import { resetInitialSongBirdData } from '../../redux/actions/creators/songBirdData';

const mapStateToProps = ({ songBirdData: { score } }) => ({ score });

const actionCreators = { resetInitialSongBirdData };

export default connect(mapStateToProps, actionCreators)(CongratulationsBlock);
