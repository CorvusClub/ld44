import { Story } from "inkjs/engine/Story";

// tslint:disable-next-line:no-var-requires
const storyContent = require("@app/ink/main.ink").default;

export const story = new Story(storyContent);
