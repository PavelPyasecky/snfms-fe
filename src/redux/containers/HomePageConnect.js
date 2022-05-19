import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';
import {getUserList} from "../thunks/user";

function mapStateToProps(state) {
  const { users } = state;
  return {
    users: (users && users.users && users.users.results) || []
  };
}

const mapDispatchToProps = {
  getUserList,
};

const HomePageConnect = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnect;
