import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggles24 } from "./Toggles24";
const meta = {
  title: "🖋️ Icons/Toggles - 24",
  component: Toggles24,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toggles24>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
