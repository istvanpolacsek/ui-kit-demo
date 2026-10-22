import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewTextPosition } from "./TypePreviewTextPosition";
const meta = {
  title: "Visual asset/Type preview / Text position",
  component: TypePreviewTextPosition,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewTextPosition>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Above" } };
