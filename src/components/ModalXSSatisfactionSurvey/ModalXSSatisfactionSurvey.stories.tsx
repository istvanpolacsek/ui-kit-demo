import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalXSSatisfactionSurvey } from "./ModalXSSatisfactionSurvey";
const meta = {
  title: "Overlay/Modal / XS / Satisfaction survey",
  component: ModalXSSatisfactionSurvey,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ModalXSSatisfactionSurvey>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Idle" } };
