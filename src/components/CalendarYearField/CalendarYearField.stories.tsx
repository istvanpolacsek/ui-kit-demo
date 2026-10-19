import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarYearField } from "./CalendarYearField";
const meta = {
  title: "Calendar/Calendar Year Field",
  component: CalendarYearField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CalendarYearField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { value: "2025" } };
