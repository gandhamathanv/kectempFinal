/* eslint-disable */
import { createStore } from "vuex";

export default createStore({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
    },
    getters: {},
    mutations: {
        setToken(state, token) {
            state.token = token;
            if (state.token) {
                state.isUserLoggedIn = true;
            } else {
                state.isUserLoggedIn = false;
            }
        },
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        setToken({ commit }, token) {
            commit("setToken", token);
        },
        setUser({ commit }, user) {
            commit("setUser", user);
        },
    },
    modules: {},
});