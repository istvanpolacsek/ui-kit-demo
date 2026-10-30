import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypeSelector } from "./TypeSelector";
const meta = {
  title: "Input/Type selector",
  component: TypeSelector,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypeSelector>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
