"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routers/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
// const uri = "mongodb+srv://devchauhan62003:<dev@62003>49.36.220.89/32:27017/workshopDB?retryWrites=true&w=majority"
// const uri = "mongodb+srv://devchauhan62003:dev%4062003@mycluster.j2b0hws.mongodb.net/"
const connectionString = "mongodb+srv://devchauhan62003:dev%4062003@mycluster.j2b0hws.mongodb.net/workshopDB?retryWrites=true&w=majority";
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("HOME");
});
//Redirect /user to userController 
app.use('/user', user_1.default);
// mongoose.connect(connectionString)
//     .then((res) => app.listen(3006))
//     .catch((err) => console.log(err))
function connectDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(connectionString);
            app.listen(3006, () => {
                console.log("Server is running");
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
connectDb();
