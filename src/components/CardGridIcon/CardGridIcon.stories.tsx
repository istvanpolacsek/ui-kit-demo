import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGridIcon } from "./CardGridIcon";
const meta = {
  title: "Sections/Card Grid Icon",
  component: CardGridIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardGridIcon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
