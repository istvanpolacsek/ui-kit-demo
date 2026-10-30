import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalMAddCaseStudy } from "./ModalMAddCaseStudy";
const meta = {
  title: "Overlay/Modal / M / Add case study",
  component: ModalMAddCaseStudy,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalMAddCaseStudy>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { defaultProp: "Default" } };
