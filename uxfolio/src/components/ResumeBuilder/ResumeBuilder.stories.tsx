import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResumeBuilder } from "./ResumeBuilder";
const meta = {
  title: "Visual asset/Resume builder",
  component: ResumeBuilder,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ResumeBuilder>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
