import type { Meta, StoryObj } from "@storybook/react-vite";
import { TokenBadge } from "./TokenBadge";
const meta = {
  title: "DS Components/.Token Badge",
  component: TokenBadge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TokenBadge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { color: true } };
