import type { Meta, StoryObj } from "@storybook/react-vite";
import { Time } from "./Time";
const meta = {
  title: "Visual asset/Time",
  component: Time,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Time>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
