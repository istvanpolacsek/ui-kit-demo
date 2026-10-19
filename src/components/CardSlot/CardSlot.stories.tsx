import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardSlot } from "./CardSlot";
const meta = {
  title: "Cards/Card (Slot)",
  component: CardSlot,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CardSlot>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
