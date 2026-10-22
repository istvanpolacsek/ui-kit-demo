import type { Meta, StoryObj } from "@storybook/react-vite";
import { MultiSelect2 } from "./MultiSelect2";
const meta = {
  title: "Input/Multi select 2",
  component: MultiSelect2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MultiSelect2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
