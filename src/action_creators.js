/**
 * Created by DTRT on 05.03.2017.
 */
export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function vote(entry) {
    return {
        type: 'VOTE',
        entry
    };
}
