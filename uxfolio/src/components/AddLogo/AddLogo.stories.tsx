import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddLogo } from "./AddLogo";
const meta = {
  title: "Visual asset/Add logo",
  component: AddLogo,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AddLogo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
