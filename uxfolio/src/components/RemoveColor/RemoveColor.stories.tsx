import type { Meta, StoryObj } from "@storybook/react-vite";
import { RemoveColor } from "./RemoveColor";
const meta = {
  title: "Visual asset/Remove color",
  component: RemoveColor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RemoveColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
