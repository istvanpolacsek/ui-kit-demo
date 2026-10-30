import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModuleDividerOnlyDivider } from "./ModuleDividerOnlyDivider";
const meta = {
  title: "Input/Module divider / Only divider",
  component: ModuleDividerOnlyDivider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModuleDividerOnlyDivider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { side: "Left image" } };
