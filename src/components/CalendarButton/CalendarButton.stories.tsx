import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarButton } from "./CalendarButton";
const meta = {
  title: "Calendar/Calendar Button",
  component: CalendarButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CalendarButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { number: "1" } };
