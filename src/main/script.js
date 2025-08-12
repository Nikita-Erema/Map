export class ErrorRepository {
    constructor() {
        this.map = new Map()
    }
    add(key, value) {
        this.map.set(key, value)
    }
    translate(code) {
        if (this.map.has(code)) {
            return this.map.get(code)
        } else {
            return 'Unknown error'
        }
    }
}
const errorList = new ErrorRepository();
errorList.add(404, 'error');
console.log(errorList.translate(404) === 'error')