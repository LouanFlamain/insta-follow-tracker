import dotenv from "dotenv";
dotenv.config();
export const Redirect = async (driver, location) => {
    try {
        let redirect = await driver.get(`${process.env.URL}${process.env.USERNAME}${location}`);
        return redirect;
    }
    catch (error) {
        console.log("error in Redirect function : ", error);
        throw error;
    }
};
