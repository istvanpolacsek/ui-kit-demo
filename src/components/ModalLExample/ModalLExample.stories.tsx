import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalLExample } from "./ModalLExample";
const meta = {
  title: "Overlay/Modal / L / Example",
  component: ModalLExample,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalLExample>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { defaultProp: 1 } };
