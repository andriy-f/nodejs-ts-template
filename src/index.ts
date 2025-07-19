import { config } from "./config";

const main = async () => {
	console.log("Using port from config:", config.port);
}

main().
	catch((error) => {
		console.error("An error occurred:", error);
		process.exit(1);
	});