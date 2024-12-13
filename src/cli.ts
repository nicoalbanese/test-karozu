import { CLI, Prompts } from "karozu/cli";
import { drizzle } from "./config";
import { templates } from "./templates";

const input = new Prompts(drizzle, (p) => ({
  dbType: () =>
    p.select({
      message: "Which DB type do you want to use?",
      options: [{ value: "mysql" }, { value: "postgres" }, { value: "sqlite" }],
    }),
  provider: () =>
    p.select({
      message: "Which provider do you want to use?",
      options: [
        { value: "neon" },
        { value: "turso" },
        { value: "planetscale" },
      ],
    }),
}));

export default new CLI(drizzle, templates, input);
