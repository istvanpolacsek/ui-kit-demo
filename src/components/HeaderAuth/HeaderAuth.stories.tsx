import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderAuth } from "./HeaderAuth";
const meta = {
  title: "Sections/Header Auth",
  component: HeaderAuth,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeaderAuth>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Logged Out" } };
