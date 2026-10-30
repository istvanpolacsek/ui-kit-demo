import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorOverride } from "./ColorOverride";
const meta = {
  title: "Module/Color override",
  component: ColorOverride,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColorOverride>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
