const router = require('express').Router();
const { ProductTag } = require('../../models');

router.get('/', (req, res) => {
    ProductTag.findAll()
        .then(dbProductTagData => res.json(dbProductTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    ProductTag.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductTagData => {
            if (!dbProductTagData) {
                res.status(404).json({ message: 'No product tag found with this id' });
                return;
            }
            res.json(dbProductTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', (req, res) => {
   
    ProductTag.create({
        id: req.body.id,
        product_id: req.body.product_id,
        tag_id: req.body.tag_id
    })
        .then(dbProductTagData => res.json(dbProductTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    ProductTag.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbProductTagData => {
            if (!dbProductTagData[0]) {
                res.status(404).json({ message: 'No product tag found with this id' });
                return;
            }
            res.json(dbProductTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.delete('/:id', (req, res) => {
    ProductTag.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductTagData => {
            if (!dbProductTagData) {
                res.status(404).json({ message: 'No product tag found with this id' });
                return;
            }
            res.json(dbProductTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
