
export function parseFileResponse(res, onError) {
    if (isError(res, (res=> {
        if(!res.file) {
            return false;
        }
        return true;
    }))) {
        const err = newError(res);
        onError && onError(err.result());
        return;
    }
    return {filename: res.file.name, data: res.file.data, }
}

function isError(res, validate) {
    return res.error == undefined && !(validate(res));
}

function newError(res) {
    return new Error(res.code, res.message);
}

class Error {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    result() {
        console.error(`[Error] code: ${this.code}, message: ${this.message}`);
        return this;
    }

    getCode() {
        return this.code;
    }

    getMessage() {
        return this.message;
    }
}