import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "./TextArea";
const meta = {
  title: "🖥️ Desktop web components/Text area",
  component: TextArea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
