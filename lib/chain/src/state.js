export function get(state) {
    return function(key) {
        return state[key] || "";
    };
}

export function set(state) {
    return function(key, value) {
        state[key] = value;
        return this;
    };
}
