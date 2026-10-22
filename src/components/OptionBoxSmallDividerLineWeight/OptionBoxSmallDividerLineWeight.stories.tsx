import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallDividerLineWeight } from "./OptionBoxSmallDividerLineWeight";
const meta = {
  title: "Input/Option box / Small / Divider line weight",
  component: OptionBoxSmallDividerLineWeight,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallDividerLineWeight>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Light" } };
