import type { Meta, StoryObj } from "@storybook/react-vite";
import { FullScreen } from "./FullScreen";
const meta = {
  title: "📱 Mobile components/full screen",
  component: FullScreen,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FullScreen>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
