import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewDeviceStyles } from "./TypePreviewDeviceStyles";
const meta = {
  title: "Visual asset/Type preview / Device styles",
  component: TypePreviewDeviceStyles,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewDeviceStyles>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "None" } };
