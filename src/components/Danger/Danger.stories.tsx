import type { Meta, StoryObj } from "@storybook/react-vite";
import { Danger } from "./Danger";
const meta = {
  title: "Visual asset/Danger",
  component: Danger,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Danger>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
