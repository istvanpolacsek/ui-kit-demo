import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallHorizontalMenuItem } from "./OptionBoxSmallHorizontalMenuItem";
const meta = {
  title: "Input/Option box / Small horizontal / Menu item",
  component: OptionBoxSmallHorizontalMenuItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallHorizontalMenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Simple" } };
