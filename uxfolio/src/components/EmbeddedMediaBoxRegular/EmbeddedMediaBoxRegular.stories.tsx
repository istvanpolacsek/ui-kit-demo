import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmbeddedMediaBoxRegular } from "./EmbeddedMediaBoxRegular";
const meta = {
  title: "Module/Embedded media box / Regular",
  component: EmbeddedMediaBoxRegular,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof EmbeddedMediaBoxRegular>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasCaption: true,
    moveLeft: true,
    moveRight: true,
    state: "Default",
    mode: "Light",
  },
};
