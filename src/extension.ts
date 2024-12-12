import { createCLI } from "karozu/cli"
import { drizzle } from "./config";
import { templates } from "./templates"

export default createCLI(drizzle, templates)