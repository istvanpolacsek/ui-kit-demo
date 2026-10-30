import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalMTransferDomain } from "./ModalMTransferDomain";
const meta = {
  title: "Overlay/Modal / M / Transfer domain",
  component: ModalMTransferDomain,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalMTransferDomain>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { state: "Not picked", numberOfDomains: "Multiple" },
};
