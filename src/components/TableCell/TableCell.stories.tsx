import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableCell } from "./TableCell";
const meta = {
  title: "Panel/Table / Cell",
  component: TableCell,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TableCell>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasCopy: true, type: "Header", state: "Default" },
};
