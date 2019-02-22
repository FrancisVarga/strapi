
import {
  getInitData,
  getInitDataSucceeded,
  hideLeftMenu,
  setAppError,
  showLeftMenu,
} from '../actions';
import {
  GET_INIT_DATA,
  GET_INIT_DATA_SUCCEEDED,
  HIDE_LEFT_MENU,
  SET_APP_ERROR,
  SHOW_LEFT_MENU,
} from '../constants';

describe('<Admin /> actions', () => {
  describe('GetInitData Action', () => {
    it('has a type of GET_INIT_DATA', () => {
      const expected = {
        type: GET_INIT_DATA,
      };

      expect(getInitData()).toEqual(expected);
    });
  });

  describe('GetInitDataSucceeded Action', () => {
    it('should return the correct type and the passed data', () => {
      const data = { autoReload: true };
      const expected = {
        type: GET_INIT_DATA_SUCCEEDED,
        data,
      };

      expect(getInitDataSucceeded(data)).toEqual(expected);
    });
  });

  describe('HideLeftMenu Action', () => {
    it('has a type of HIDE_LEFT_MENU', () => {
      const expected = {
        type: HIDE_LEFT_MENU,
      };

      expect(hideLeftMenu()).toEqual(expected);
    });
  });

  describe('SetAppError Action', () => {
    it('has a type of SET_APP_ERROR', () => {
      const expected = {
        type: SET_APP_ERROR,
      };

      expect(setAppError()).toEqual(expected);
    });
  });

  describe('ShowLeftMenu Action', () => {
    it('has a type of SHOW_LEFT_MENU', () => {
      const expected = {
        type: SHOW_LEFT_MENU,
      };

      expect(showLeftMenu()).toEqual(expected);
    });
  });
});
