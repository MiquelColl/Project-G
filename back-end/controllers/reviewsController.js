import Reviews from '../models/reviewsModel.js';

export const newReview = async (req, res) => {
    const document = new Reviews(req.body);
    try {
    
        const doc = await document.save();
        res.json({ message: 'New review was added with id:'+doc._id });
    } catch (error) {
        res.send(error);
    }
};

export const showAllReviews = async (req, res) => {
    try {
        const documents = await Reviews.find({});
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

// export const updateReview = async (req, res) => {
//     try {
//         const filter = { title: req.body.title };
//         const update = req.body;
//         const options = { new: true };
//         //const { title } = req.params;

//         const document = await Reviews.findOneAndUpdate(filter, update, options);
//         res.json({
//             "message": "Review updated successfuly",
//             ...document

//         });
//     } catch (error) {
//         res.send(error);
//     }
// };


export const updateReview = async (req, res) => {
    const { title } = req.params;
    const { description } = req.body;
    Reviews
        .updateOne({ title: title }, {$set:{ description }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
};


// export const deleteReview = async (req, res) => {
//     const { title } = req.params;
//     Reviews
//         .findOneAndRemove({ title })
//         .then((data) => res.json({ message: 'The game was deleted with name:'+data.title }))
//         .catch((error) => res.json({ message: error }))};

export const deleteReview = async (req, res) => {

    try {
        const { title } = req.params;

        await Reviews.findOneAndRemove({ title })
        res.json({ message: 'The game was deleted with id:'+req.params.title });
    } catch (error) {
        console.log(error);
    }
};