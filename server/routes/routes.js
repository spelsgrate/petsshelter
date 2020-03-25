const PetController = require('../controllers/pet.controller');
module.exports = function(app){
    app.get('/api/getAllPets', PetController.getAllPets);
    app.get('/api/getPet/:id', PetController.getPet);
    app.post('/api/createPet', PetController.createPet);
    app.delete('/api/deletePet/:id', PetController.deletePet);
    app.put('/api/updatePet/:id', PetController.updatePet);
}