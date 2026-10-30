import type { Meta, StoryObj } from "@storybook/react-vite";
import { Guide } from "./Guide";
const meta = {
  title: "Panel/Guide",
  component: Guide,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Guide>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Domain connection" } };
