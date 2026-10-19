import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationPill } from "./NavigationPill";
const meta = {
  title: "Navigation/Navigation Pill",
  component: NavigationPill,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationPill>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { label: "Link" } };
