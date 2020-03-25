const { Pet } = require('../models/pet.model');

const responseHandler = response => x => {
	console.log("Response: ", x);
	return response.json(x);
};

const errHandler = err => {
	console.log("Error: ", err);
	return response.json(err);
};

// The method below is new
module.exports.createPet = (request, response) => {
	const pet = request.body;
	console.log("calling createPet", pet);
	Pet.create(pet)
		.then(responseHandler(response))
		.catch(err => response.json(err));
};

module.exports.getAllPets = (request, response) => {
	console.log("running getAllPets");
	Pet.find({}).sort("type").exec()
		.then(responseHandler(response))
		.catch(errHandler);
};

module.exports.getPet = (request, response) => {
	const id = request.params.id;
	console.log("running getPet: " + id);
	Pet.findOne({_id: id})
		.then(responseHandler(response))
		.catch(errHandler);
};

module.exports.updatePet = (request, response) => {
	const pet = request.body;
	const id = request.params.id;
	console.log("running updatePet: " + id);
	Pet.findOneAndUpdate({_id: id}, pet, {runValidators:true})
		.then(responseHandler(response))
		.catch(errHandler);
};

module.exports.deletePet = (request, response) => {
	const id = request.params.id;
	console.log("deleting " + id);
	Pet.deleteOne({_id:id})
		.then(responseHandler(response))
		.catch(errHandler);
};