import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalMAddSection } from "./ModalMAddSection";
const meta = {
  title: "Overlay/Modal / M / Add section",
  component: ModalMAddSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalMAddSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Basic", page: "Main" } };
