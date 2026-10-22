import type { Meta, StoryObj } from "@storybook/react-vite";
import { RemovePage } from "./RemovePage";
const meta = {
  title: "Visual asset/Remove page",
  component: RemovePage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RemovePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
