import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGridImage } from "./CardGridImage";
const meta = {
  title: "Sections/Card Grid Image",
  component: CardGridImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardGridImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
