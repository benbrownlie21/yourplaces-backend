import HttpError from "../models/http-error.js";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://media.timeout.com/images/101705309/image.jpg',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    }
];

export const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid;

    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId
    });

    if (!place) {
        throw new HttpError('Could not find a place for the provided ID', 404);
    }

    res.json({ place });
};

export const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.uid;

    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    });

    if (!place) {
        return next(
            new HttpError('Could not find a place for the provided User ID', 404)
        );
     }

    res.json({ place });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;