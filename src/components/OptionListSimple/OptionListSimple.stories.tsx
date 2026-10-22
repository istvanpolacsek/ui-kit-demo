import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionListSimple } from "./OptionListSimple";
const meta = {
  title: "Panel/Option list / Simple",
  component: OptionListSimple,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionListSimple>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasLavel: true, type: "Default" } };
