import type { Meta, StoryObj } from "@storybook/react-vite";
import { RemoveLogo } from "./RemoveLogo";
const meta = {
  title: "Visual asset/Remove logo",
  component: RemoveLogo,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RemoveLogo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
