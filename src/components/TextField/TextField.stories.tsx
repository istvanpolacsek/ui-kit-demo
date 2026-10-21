import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "./TextField";
const meta = {
  title: "📱 Mobile components/text field",
  component: TextField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    showPlaceholder: true,
    showHeader: false,
    showButton: false,
    state: "Resting",
  },
};
