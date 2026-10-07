import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";
const meta = {
  component: Alert,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
