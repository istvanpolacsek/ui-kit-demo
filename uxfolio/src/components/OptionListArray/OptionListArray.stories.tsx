import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionListArray } from "./OptionListArray";
const meta = {
  title: "Panel/Option list / Array",
  component: OptionListArray,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionListArray>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasLavel: true, type: "Default" } };
