/**
 * Created by DTRT on 05.03.2017.
 */
export default socket => store => next => action => {
    console.log('in middleware', action);
    if (action.meta && action.meta.remote) {
        socket.emit('action', action);
    }
    return next(action);
}
