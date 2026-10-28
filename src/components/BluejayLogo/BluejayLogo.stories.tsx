import type { Meta, StoryObj } from "@storybook/react-vite";
import { BluejayLogo } from "./BluejayLogo";
const meta = {
  title: "Design System/Bluejay Logo",
  component: BluejayLogo,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BluejayLogo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
