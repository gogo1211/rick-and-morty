import { connect } from 'react-redux';

import CharacterListComponent from '../components/CharacterList';
import { loadList } from '../store/actions';

const mapStateToProps = ({ list }) => list;

const mapDispatchToProps = dispatch => ({ loadList: () => dispatch(loadList()) });

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListComponent);
