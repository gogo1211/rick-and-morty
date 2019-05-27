import { connect } from 'react-redux';

import CharacterDetailComponent from '../components/CharacterDetail';
import { loadDetail } from '../store/actions';

const mapStateToProps = ({ detail }) => detail;

const mapDispatchToProps = dispatch => ({ loadDetail: id => dispatch(loadDetail(id)) });

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetailComponent);
