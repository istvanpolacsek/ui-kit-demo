import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardGridContentList } from "./CardGridContentList";
const meta = {
  title: "Sections/Card Grid Content List",
  component: CardGridContentList,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardGridContentList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
