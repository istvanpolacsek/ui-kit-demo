import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalWalkthrough } from "./ModalWalkthrough";
const meta = {
  title: "Overlay/Modal / Walkthrough",
  component: ModalWalkthrough,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalWalkthrough>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { step: "Intro" } };
