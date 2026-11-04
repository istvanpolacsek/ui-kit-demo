import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarSelectGroup } from "./CalendarSelectGroup";
const meta = {
  title: "Calendar/Calendar Select Group",
  component: CalendarSelectGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CalendarSelectGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
