import { LOADING } from '../types';

const initialState = {
  loading: true
};
export const loading = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading
        }
    default:
      return state;
  }
}