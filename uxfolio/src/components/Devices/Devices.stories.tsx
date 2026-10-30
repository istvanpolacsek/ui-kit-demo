import type { Meta, StoryObj } from "@storybook/react-vite";
import { Devices } from "./Devices";
const meta = {
  title: "Visual asset/Devices",
  component: Devices,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Devices>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
