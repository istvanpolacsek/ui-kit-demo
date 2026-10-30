import type { Meta, StoryObj } from "@storybook/react-vite";
import { LightMode } from "./LightMode";
const meta = {
  title: "Visual asset/Light mode",
  component: LightMode,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof LightMode>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
