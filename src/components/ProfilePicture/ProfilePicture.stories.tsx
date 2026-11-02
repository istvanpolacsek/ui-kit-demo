import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProfilePicture } from "./ProfilePicture";
const meta = {
  title: "Design System/Profile Picture",
  component: ProfilePicture,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ProfilePicture>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    size: "S",
    children: (
      <img
        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%23c7d2e0'/><circle cx='100' cy='80' r='36' fill='%238a9bb3'/><ellipse cx='100' cy='190' rx='70' ry='60' fill='%238a9bb3'/></svg>"
        alt=""
      />
    ),
  },
};
