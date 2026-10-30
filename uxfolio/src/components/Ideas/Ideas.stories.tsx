import type { Meta, StoryObj } from "@storybook/react-vite";
import { Ideas } from "./Ideas";
const meta = {
  title: "Visual asset/Ideas",
  component: Ideas,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Ideas>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
