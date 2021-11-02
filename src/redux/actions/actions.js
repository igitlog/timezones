import { LOADING } from '../types';

export function loading(loading) {
  return {
    type: LOADING,
    loading
  }
}