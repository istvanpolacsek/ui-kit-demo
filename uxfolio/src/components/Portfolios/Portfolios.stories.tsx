import type { Meta, StoryObj } from "@storybook/react-vite";
import { Portfolios } from "./Portfolios";
const meta = {
  title: "Visual asset/Portfolios",
  component: Portfolios,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Portfolios>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
