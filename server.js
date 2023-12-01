const express = require("express")
const cors = require("cors")
const db =  require("./app/models")
const app = express();

const corsOptions = {
    origin: "*"
};

// reg cors middleware
app.use(cors(corsOptions));
app.use(express.json());

// db conn

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("Database connected"))
    .catch(err => {
        console.log(`Failed to connect ${err.message}`);
        process.exit();
    });

// routes
require("./app/routes/rivals.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));