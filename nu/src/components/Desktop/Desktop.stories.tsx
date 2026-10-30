import type { Meta, StoryObj } from "@storybook/react-vite";
import { Desktop } from "./Desktop";
const meta = {
  title: "  ↳ Input Field/Desktop",
  component: Desktop,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    textState: { control: "select", options: ["Placeholder", "Secure"] },
  },
} satisfies Meta<typeof Desktop>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", textState: "Placeholder" },
};
