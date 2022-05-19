import userApi from '../../api/userApi';
import userActions from '../actions/user';

export const getUserList =
  () =>
  async (dispatch) => {
      dispatch(userActions.getUserListRequest());

      const users = await userApi.getUserList().catch((err) => {
          dispatch(userActions.getUserListFailure(err));
          console.log(err);
      });
      dispatch(userActions.getUserListSuccess(users));
  };
