import type { Meta, StoryObj } from "@storybook/react-vite";
import { OverlayCanvasHomogen } from "./OverlayCanvasHomogen";
const meta = {
  title: "Overlay/Overlay canvas / Homogen",
  component: OverlayCanvasHomogen,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OverlayCanvasHomogen>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Dimming", strength: "Weak" } };
