import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalMAddDomainToPortfolio } from "./ModalMAddDomainToPortfolio";
const meta = {
  title: "Overlay/Modal / M / Add domain to portfolio",
  component: ModalMAddDomainToPortfolio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalMAddDomainToPortfolio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Not picked" } };
