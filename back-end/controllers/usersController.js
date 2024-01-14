import Users from "../models/usersModel.js";


// Registra un nuevo usuario
/*------------------------------------------*/
export const registerUser = async (req, res) => {
    try {
        // Get user input
        const { name, surnames, email, password, address } = req.body;
    
        console.log("registerUser", req.body);

        // Validate user input
        if (!(email && password && name && surnames && address)) {
            res.status(400).json({
                "error":true,
                "message":"All input is required"
            });
        }

        // Check if user already exist. Validate if user exist in our database
        const oldUser = await Users.findOne({ email });
        if (oldUser) {
            //return res.status(409).send("User Already Exist. Please Login");
            return res.status(409).json({
                "error":true,
                "message":"User Already Exist. Please Login"
            });
        }

        //Encrypt user password
        // const encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await Users.create({
            name,
            surnames,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password,
            address
        });

        // return new user
        res.status(201).json({
            "error":false,
            "message":"Register successful",
            "user":user
        }); 
    } catch (err) {
        console.log(err);
    }
}