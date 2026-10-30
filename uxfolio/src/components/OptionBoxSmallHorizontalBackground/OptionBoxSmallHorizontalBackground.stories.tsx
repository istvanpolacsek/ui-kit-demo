import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallHorizontalBackground } from "./OptionBoxSmallHorizontalBackground";
const meta = {
  title: "Input/Option box / Small horizontal / Background",
  component: OptionBoxSmallHorizontalBackground,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallHorizontalBackground>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Transparent" } };
