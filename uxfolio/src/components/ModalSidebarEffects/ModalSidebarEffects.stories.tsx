import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalSidebarEffects } from "./ModalSidebarEffects";
const meta = {
  title: "Panel/Modal sidebar / Effects",
  component: ModalSidebarEffects,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalSidebarEffects>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
