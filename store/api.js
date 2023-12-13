export const state = () => ({
  client: [],
  staff: [],
  scoreboard: [],
  report: [],
  card: [],
  modal: false,
  meta: null,
  station: [],
  toast: {
    open: false,
    text: null,
  },
  isDelete: false,
  partners: [],
});

export const getters = {
  cardFilter(state) {
    return (
      state.card?.results &&
      Object.values(
        state.card?.results?.reduce((acc, obj) => {
          if (!acc[obj.station]) {
            acc[obj.station] = [obj];
          } else {
            acc[obj.station].push(obj);
          }
          return acc;
        }, {})
      )
    );
  },
};

export const mutations = {
  GET_PAGEDATA(state, { data, key }) {
    state[key] = data?.data;
    state.meta = data.last_page;
  },
  SET_MODAL(state, payload) {
    state.modal = payload;
  },
  SET_DELETE(state) {
    state.modal = true;
  },
  UN_TOAST(state) {
    state.toast.open = false;
    state.toast.text = null;
  },
  SET_TOAST(state, payload) {
    state.toast.open = true;
    state.toast.text = payload;
  },
};

export const actions = {
  async get_page({ commit }, payload) {
    try {
      let res = await this.$axios.get(payload.request);
      commit("GET_PAGEDATA", { data: res, key: payload.key });
    } catch (err) {}
  },

  async store({ dispatch, commit }, payload) {
    try {
      return await this.$axios
        .post(payload.request, payload.form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          window.location.reload();
          commit("SET_TOAST", payload.text);
          setTimeout(() => {
            commit("UN_TOAST");
          }, 5000);
        });
      //  dispatch("get_pagedata", payload.refreshData);
    } catch (err) {
      //  commit("SET_ERROR", err.response.data);
    }
  },
  async edit({ dispatch, commit }, payload) {
    try {
      await this.$axios
        .patch(payload.request, payload.form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          commit("SET_TOAST", payload.text);
          setTimeout(() => {
            commit("UN_TOAST");
          }, 5000);
        });
      //  dispatch("get_pagedata", payload.refreshData);
    } catch (err) {
      commit("SET_ERROR", response.data);
    }
  },
};
