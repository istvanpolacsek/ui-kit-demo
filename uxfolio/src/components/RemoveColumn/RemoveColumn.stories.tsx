import type { Meta, StoryObj } from "@storybook/react-vite";
import { RemoveColumn } from "./RemoveColumn";
const meta = {
  title: "Visual asset/Remove column",
  component: RemoveColumn,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RemoveColumn>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
