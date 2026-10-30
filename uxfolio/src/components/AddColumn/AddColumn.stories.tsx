import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddColumn } from "./AddColumn";
const meta = {
  title: "Visual asset/Add column",
  component: AddColumn,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AddColumn>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
