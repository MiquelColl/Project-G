import Games from '../models/gamesModel.js';


export const newGame = async (req, res) => {
    const document = new Games(req.body);
    try {
    
        const doc = await document.save();
        res.json({ message: 'New game was added with id:'+doc.gameTitle });
    } catch (error) {
        res.send(error);
    }
};

export const showAllGames = async (req, res) => {
    try {
        const documents = await Games.find({});
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const deleteGame = async (req, res) => {

    try {
        
        const { gameTitle } = req.params;
        console.log(req.params);
        console.log('HERE', gameTitle);
        await Games.findOneAndDelete({ gameTitle })
        res.json({ message: 'The game was deleted with name: '+ gameTitle });
    } catch (error) {
        console.log(error);
    }
};

export const searchGames = async (req, res) => {
    try {
        const { gameTitle } = req.params;
        console.log(gameTitle);
        const documents = await Games.find({ gameTitle: new RegExp(gameTitle, 'i') })
            
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};