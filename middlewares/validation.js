const { check } = require('express-validator');
const ObjectId = require('mongoose').Types.ObjectId;
const { validationResult } = require('express-validator');

exports.validationResult = validationResult;

exports.songValidation = [
  check('title', 'Title is required.').not().isEmpty(),
  check('title', 'Please insert a valid value.').isString(),
  check('rating', 'Please, use an integer number for the rating.').isInt(),
  check('release_year', 'Please, use an integer number for release_year.').isInt(),
  check('summary', 'Please insert a valid value.').isString(),
  check('artist').custom((artist)=>{
    if(ObjectId.isValid(artist)){
        if((String)(new ObjectId(artist)) === artist){
            return true;
        }
    }
    else{
        return Promise.reject('Value for artists is not valid.');
    }
  })
];
