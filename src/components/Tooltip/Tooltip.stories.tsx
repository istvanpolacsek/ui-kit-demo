import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
const meta = {
  title: "Tooltip/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Title",
    body: "Body text",
    hasBody: true,
    placement: "Top",
    slot: "Tooltip text",
    children: <button type="button">Hover or focus me</button>,
    defaultOpen: true,
  },
};
