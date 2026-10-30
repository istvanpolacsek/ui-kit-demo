import type { Meta, StoryObj } from "@storybook/react-vite";
import { MediumImage } from "./MediumImage";
const meta = {
  title: "Visual asset/Medium image",
  component: MediumImage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MediumImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
