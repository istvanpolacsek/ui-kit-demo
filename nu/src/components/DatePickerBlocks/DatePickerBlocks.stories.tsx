import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePickerBlocks } from "./DatePickerBlocks";
const meta = {
  title: "  ↳ Date Picker/Date Picker Blocks",
  component: DatePickerBlocks,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DatePickerBlocks>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    date: "00",
    showFocusIndicator: true,
    type: "Default",
    state: "Enabled",
  },
};
