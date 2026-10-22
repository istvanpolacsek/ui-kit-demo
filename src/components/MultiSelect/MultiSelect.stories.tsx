import type { Meta, StoryObj } from "@storybook/react-vite";
import { MultiSelect } from "./MultiSelect";
const meta = {
  title: "Input/Multi select",
  component: MultiSelect,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MultiSelect>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
