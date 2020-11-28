const validator =  require('validator');

let User = function(data) {
	this.data = data;
	this.errors = [];
}

User.prototype.cleanUp = function() {
	if (typeof(this.data.username) != "string" ) {this.data.username = "";}
	if (typeof(this.data.email) != "string" ) {this.data.email = "";}
	if (typeof(this.data.password) != "string" ) {this.data.password = "";}

	// Get rid of any bogus properties
	this.data = {
		username: this.data.username.trim().toLowerCase(),
		email: this.data.email.trim().toLowerCase(),
		password: this.data.password
	}
}

User.prototype.validate = function() {
	if (this.data.username == "") {this.errors.push('Please provide a Username')}
	if (this.data.username != '' && !validator.isAlphanumeric(this.data.username)) {this.errors.push('Username can only contains letters and numbers')}
	if (!validator.isEmail(this.data.email)) {this.errors.push('Please provide a valid Email')}
	if (this.data.password == "") {this.errors.push('Please provide a Password')}
	if (this.data.password.length > 0 && this.data.password.length < 6 ) {this.errors.push('Password must be at least 6 characters')}
	if (this.data.password.length > 100 ) {this.errors.push('Password cannot exceed 30 characters')}
	if (this.data.username.length > 0 && this.data.username.length < 3 ) {this.errors.push('Password must be at least 4 characters')}
	if (this.data.username.length > 26 ) {this.errors.push('Password cannot exceed 26 characters')}
}


User.prototype.register = function() {
	// Step 1 - Validate user data
	this.cleanUp()
	this.validate();
	// Step 2 - Only if there area no validation errors the save the user data to database


}

module.exports = User