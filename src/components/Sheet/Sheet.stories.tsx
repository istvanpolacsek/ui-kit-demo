import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sheet } from "./Sheet";
const meta = {
  title: "📱 Mobile components/sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sheet>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
