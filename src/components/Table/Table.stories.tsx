import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./Table";
const meta = {
  title: "Panel/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { column: 2, row: 2 } };
