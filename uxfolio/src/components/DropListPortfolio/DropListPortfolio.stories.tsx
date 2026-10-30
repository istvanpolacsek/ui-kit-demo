import type { Meta, StoryObj } from "@storybook/react-vite";
import { DropListPortfolio } from "./DropListPortfolio";
const meta = {
  title: "Input/Drop list / Portfolio",
  component: DropListPortfolio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DropListPortfolio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Home" } };
