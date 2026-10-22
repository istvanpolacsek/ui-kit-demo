import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mobile } from "./Mobile";
const meta = {
  title: "  ↳ Input Field 🆕/Mobile",
  component: Mobile,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    textState: { control: "select", options: ["Placeholder", "Secure"] },
  },
} satisfies Meta<typeof Mobile>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Default", textState: "Placeholder" },
};
