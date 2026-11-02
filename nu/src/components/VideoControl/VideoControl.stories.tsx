import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoControl } from "./VideoControl";
const meta = {
  title: "  ↳ Controls/Video Control",
  component: VideoControl,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof VideoControl>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Rewind" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
