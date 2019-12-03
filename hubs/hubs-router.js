const express = require('express');

// Require is the import of the data from the db
const Hubs = require('./hubs-model');

//make sure to invoke and use uppercase"R"
const router = express.Router();


// GET of all the hubs data
router.get('/', (req, res) => {
    // we are using query string parameters
    // we can use limit to decide how many hubs to get from the db
    Hubs.find(req.query)
        .then(hubs => {
            res.status(200).json(hubs);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the hubs',
            });
        });
});

// GET of an individual id of the hubs data
router.get('/:id', (req, res) => {
    Hubs.findById(req.params.id)
        .then(hub => {
            if (hub) {
                res.status(200).json(hub);
            } else {
                res.status(404).json({ message: 'Hub not found' });
            }
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the hub',
            });
        });
});

// POST to the hubs data
router.post('/', (req, res) => {
    Hubs.add(req.body)
        .then(hub => {
            res.status(201).json(hub);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error adding the hub',
            });
        });
});

// DELETE by id of the hubs data
router.delete('/:id', (req, res) => {
    Hubs.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'The hub has been nuked' });
            } else {
                res.status(404).json({ message: 'The hub could not be found' });
            }
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error removing the hub',
            });
        });
});

// PUT/Update on the hubs data
router.put('/:id', (req, res) => {
    const changes = req.body;
    Hubs.update(req.params.id, changes)
        .then(hub => {
            if (hub) {
                res.status(200).json(hub);
            } else {
                res.status(404).json({ message: 'The hub could not be found' });
            }
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error updating the hub',
            });
        });
});


// add an endpoint that returns all the messages for a hub
// GET /api/hubs:id/messages
router.get("/:id/messages", (req, res) => {
    Hubs.findHubMessages(req.params.id)
    .then(messages => {
        res.status(200).json(messages);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'error getting messages' })
    })
})

//GET /api/messages/:hubId
//GET /api/threads

// add an endpoint for adding new message to a hub
router.post("/:id/messages", (req, res) => {
    Hubs.addMessage(req.body)
    .then(message => {
        res.status(201).json(message)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'error posting message' })
    })
})

module.exports = router;//<<<<<<<<<<<<<,export the router