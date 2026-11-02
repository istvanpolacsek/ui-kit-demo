import { addons } from "storybook/manager-api";
import { preferredTheme } from "./brandTheme";

addons.setConfig({ theme: preferredTheme });
