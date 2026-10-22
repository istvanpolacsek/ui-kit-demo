import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSCaseStudyPassword } from "./ModalSCaseStudyPassword";
const meta = {
  title: "Overlay/Modal / S / Case study password",
  component: ModalSCaseStudyPassword,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSCaseStudyPassword>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { ...Default.args, selected: true } };
