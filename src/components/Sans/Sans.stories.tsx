import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sans } from "./Sans";
const meta = {
  title: "Visual asset/Sans",
  component: Sans,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sans>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
