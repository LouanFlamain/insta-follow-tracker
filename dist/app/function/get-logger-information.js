import dotenv from "dotenv";
dotenv.config();
export const GetLoggerInformation = () => {
    let data = {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    };
    return data;
};
