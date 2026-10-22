import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallHorizontalNavPosition } from "./OptionBoxSmallHorizontalNavPosition";
const meta = {
  title: "Input/Option box / Small horizontal / Nav position",
  component: OptionBoxSmallHorizontalNavPosition,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallHorizontalNavPosition>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Top", hero: "Normal" } };
