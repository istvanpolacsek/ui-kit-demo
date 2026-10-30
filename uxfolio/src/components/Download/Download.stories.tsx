import type { Meta, StoryObj } from "@storybook/react-vite";
import { Download } from "./Download";
const meta = {
  title: "Visual asset/Download",
  component: Download,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Download>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
