
export default {

  namespace: 'example',

  state: {
    data: [],
    textArray: [],
    searchValue: '',
    carousel: [],
    menuCurrent: 'index'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *storage({ payload, callback }, { call, put }) {
      yield put({ type: 'data', payload })
      if (callback) callback()
    },
    *getCarousel({ payload }, { call, put }) {
      yield put ({ type: 'carousel', payload })
    },
    *menuCurrentChange({ payload, callback }, { call, put }) {
      yield put({ type: 'menuCurrent', payload })
      if (callback) callback()
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    data(state, action) {
      return {
        ...state,
        data: action.payload.result,
       }
    },

    carousel(state, action) {
      return {
        ...state,
        carousel: action.payload.result
      }
    },

    menuCurrent(state, action) {
      return {
        ...state,
        menuCurrent: action.payload
      }
    }
  },

};
