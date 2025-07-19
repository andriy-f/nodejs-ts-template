import { config } from "./config.js";

const main = async () => {
	console.log("Config port:", config.port);
}

main().
	catch((error) => {
		console.error("An error occurred:", error);
		process.exit(1);
	});