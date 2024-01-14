import News from '../models/newsModel.js';


export const insertNew = async (req, res) => {
    const document = new News(req.body);
    try {
    
        const doc = await document.save();
        res.json({ message: 'New new was added with id:'+doc.newTitle });
    } catch (error) {
        res.send(error);
    }
};

export const showAllNews = async (req, res) => {
    try {
        const documents = await News.find({});
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};