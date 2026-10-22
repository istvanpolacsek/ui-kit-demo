import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyLinkLegacy } from "./CopyLinkLegacy";
const meta = {
  title: "Button/Copy link / Legacy",
  component: CopyLinkLegacy,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CopyLinkLegacy>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
export const Selected: Story = { args: { ...Default.args, selected: true } };
