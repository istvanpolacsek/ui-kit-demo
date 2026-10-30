import type { Meta, StoryObj } from "@storybook/react-vite";
import { SmallTypeSelector } from "./SmallTypeSelector";
const meta = {
  title: "Input/Small type selector",
  component: SmallTypeSelector,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SmallTypeSelector>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
