const state = () => ({
    recentItem: '',
    count: 0
});

const getters = {

}

const actions = {
    logging_middle({ commit }, data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.commit('todoItem/syncPrint_test', data + '-> logging_middle action');
                resolve();
            }, 1000)
        });
    },
    logging({ dispatch, commit, state }, data) {
        setTimeout(() => {
            // commit('syncPrint_test', 'logging actions');
            dispatch('logging_middle', 'logging action')
            .then(() => {
                this.commit('todoItem/syncPrint_test', 'logging actions');
            })
        }, 2000);  
    }
}

const mutations = {
    updateRecentItem(state, item) {
        state.recentItem = item;
    },
    syncPrint_test(state, ref) {
        state.count++;
        console.log('[%s] syncPrint_test func is called from [%s]', String(state.count), ref);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
