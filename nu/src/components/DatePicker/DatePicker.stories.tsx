import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "./DatePicker";
const meta = {
  title: "  ↳ Date Picker/Date Picker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DatePicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Closed", device: "Desktop" } };
