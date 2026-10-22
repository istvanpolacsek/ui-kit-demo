import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyLink } from "./CopyLink";
const meta = {
  title: "Button/Copy link",
  component: CopyLink,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CopyLink>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default", mode: "Light" } };
