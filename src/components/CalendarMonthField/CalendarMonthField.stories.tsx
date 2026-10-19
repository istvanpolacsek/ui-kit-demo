import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarMonthField } from "./CalendarMonthField";
const meta = {
  title: "Calendar/Calendar Month Field",
  component: CalendarMonthField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CalendarMonthField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasLabel: false,
    label: "Label",
    options: [
      { value: "January", label: "January" },
      { value: "February", label: "February" },
      { value: "March", label: "March" },
      { value: "April", label: "April" },
      { value: "May", label: "May" },
      { value: "June", label: "June" },
      { value: "July", label: "July" },
      { value: "August", label: "August" },
      { value: "September", label: "September" },
      { value: "October", label: "October" },
      { value: "November", label: "November" },
      { value: "December", label: "December" },
    ],
    placeholder: "September",
  },
};
export const Selected: Story = { args: { ...Default.args, value: "January" } };
export const Open: Story = { args: { ...Default.args, open: true } };
