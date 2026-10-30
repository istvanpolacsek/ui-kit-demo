import type { Meta, StoryObj } from "@storybook/react-vite";
import { NoLink } from "./NoLink";
const meta = {
  title: "Visual asset/No link",
  component: NoLink,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NoLink>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
