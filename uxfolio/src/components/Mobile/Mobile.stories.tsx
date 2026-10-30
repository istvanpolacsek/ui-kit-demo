import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mobile } from "./Mobile";
const meta = {
  title: "Visual asset/Mobile",
  component: Mobile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Mobile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
