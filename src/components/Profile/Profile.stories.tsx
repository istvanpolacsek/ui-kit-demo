import type { Meta, StoryObj } from "@storybook/react-vite";
import { Profile } from "./Profile";
const meta = {
  title: "Visual asset/Profile",
  component: Profile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Profile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
