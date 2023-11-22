export function filterDrivers(obj, { name, expFrom, expTo }) {
    if (name) {
        if (!obj.name.toLowerCase().includes(name.toLowerCase())) return false
    }
    if (expFrom) {
        if (obj.exp < expFrom) return false
    }
    if (expTo) {
        if (obj.exp > expTo) return false
    }
    return true
}