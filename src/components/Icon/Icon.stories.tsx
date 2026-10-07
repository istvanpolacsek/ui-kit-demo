import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
const meta = {
  component: Icon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { iconName: "anchor" } };
