import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExamplesSlot } from "./ExamplesSlot";
const meta = {
  title: "Examples/Examples/Slot",
  component: ExamplesSlot,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ExamplesSlot>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { platform: "Desktop" } };
