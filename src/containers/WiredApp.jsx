import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, toggleTodo } from '../redux/todos/actions';
import App from '../components/App';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      addTodo,
      toggleTodo,
    },
    dispatch,
  )
);

const WiredApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default WiredApp;
