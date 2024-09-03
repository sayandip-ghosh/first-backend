class ApiResponse{
    constructor(statusCode, message= "Success", data){
        this.statusCode = statusCode
        this.data = data
        this.errors = errors
        this.message = message
        this.success = statusCode < 400

    }
}

export { ApiResponse }