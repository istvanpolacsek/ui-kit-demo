import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { OptionBoxSmallHorizontalBackground } from "../OptionBoxSmallHorizontalBackground";
import { OptionBoxLargeHorizontalTextPosition } from "../OptionBoxLargeHorizontalTextPosition";
import { OptionBoxLargeHorizontalImageHeightConsistency } from "../OptionBoxLargeHorizontalImageHeightConsistency";
import { OptionBoxLargeHorizontalMoveSection } from "../OptionBoxLargeHorizontalMoveSection";
import { OptionBoxMediumSquareThumbnailLayout } from "../OptionBoxMediumSquareThumbnailLayout";
import { OptionBoxMediumSquareAspectRatio } from "../OptionBoxMediumSquareAspectRatio";
import { OptionBoxMediumSquareSectionAlignment } from "../OptionBoxMediumSquareSectionAlignment";
import { OptionBoxMediumSquareAnimation } from "../OptionBoxMediumSquareAnimation";
import { OptionBoxSmallHorizontalNavPosition } from "../OptionBoxSmallHorizontalNavPosition";
import { OptionBoxSmallHorizontalMenuItem } from "../OptionBoxSmallHorizontalMenuItem";
import { OptionBoxSmallThumbnailDevices } from "../OptionBoxSmallThumbnailDevices";
import { OptionBoxSmallFrontCamera } from "../OptionBoxSmallFrontCamera";
import { OptionBoxSmallThumbnailDeviceCorner } from "../OptionBoxSmallThumbnailDeviceCorner";
import { OptionBoxSmallThumbnailDeviceColor } from "../OptionBoxSmallThumbnailDeviceColor";
import { OptionBoxSmallDeviceStyles } from "../OptionBoxSmallDeviceStyles";
import { OptionBoxSmallDeviceShadow } from "../OptionBoxSmallDeviceShadow";
import { OptionBoxSmallDividerLineWeight } from "../OptionBoxSmallDividerLineWeight";
import { OptionBoxSmallImageShape } from "../OptionBoxSmallImageShape";
import { MessageAlert } from "../MessageAlert";

export interface OptionGridSimpleProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasSubheader" | "isHardToSee" | "type"
> {
  hasSubheader?: boolean;
  isHardToSee?: boolean;
  type?:
    | "Section background"
    | "Text position"
    | "Mobile layout"
    | "Tablet layout"
    | "Desktop layout"
    | "Laptop layout"
    | "Aspect ratio"
    | "Device style"
    | "Corner radius"
    | "Device camera"
    | "Device color"
    | "Device type"
    | "Shadow"
    | "Line weight"
    | "Vertical align"
    | "Horizontal align"
    | "Image shape"
    | "Hero layout"
    | "Animation"
    | "Nav position normal"
    | "Nav position sidebar"
    | "Menu item"
    | "Height of images"
    | "Move section";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledGrid = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** A grid of selectable option boxes allowing users to choose from a set of visual or layout settings. Optionally includes a subheader label and an accessibility alert for low-visibility states. */
export const OptionGridSimple = React.forwardRef<
  HTMLDivElement,
  OptionGridSimpleProps
>(function OptionGridSimple(
  {
    hasSubheader = true,
    isHardToSee = false,
    type = "Section background",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="group" aria-label="Option grid" {...rest} ref={ref}>
      {hasSubheader && (
        <StyledSubheaderSmall>
          <SubheaderSmall hasIcon={false} mode={"Dark"} />
        </StyledSubheaderSmall>
      )}
      <StyledGrid>
        {type === "Section background" && (
          <OptionBoxSmallHorizontalBackground type={"Transparent"} />
        )}
        {type === "Section background" && (
          <OptionBoxSmallHorizontalBackground type={"Solid"} />
        )}
        {type === "Section background" && (
          <OptionBoxSmallHorizontalBackground type={"Vertical"} />
        )}
        {type === "Section background" && (
          <OptionBoxSmallHorizontalBackground type={"Horizontal"} />
        )}
        {type === "Section background" && (
          <OptionBoxSmallHorizontalBackground type={"Left corner"} />
        )}
        {type === "Section background" && (
          <OptionBoxSmallHorizontalBackground type={"Right corner"} />
        )}
        {type === "Section background" && (
          <OptionBoxSmallHorizontalBackground type={"Radial"} />
        )}
        {type === "Section background" && (
          <OptionBoxSmallHorizontalBackground type={"Corner"} />
        )}
        {type === "Section background" && (
          <OptionBoxSmallHorizontalBackground type={"Special"} />
        )}
        {["Text position", "Hero layout"].includes(type) && (
          <OptionBoxLargeHorizontalTextPosition
            showLabel={true}
            type={"Below"}
          />
        )}
        {["Text position", "Hero layout"].includes(type) && (
          <OptionBoxLargeHorizontalTextPosition
            showLabel={true}
            type={"Above"}
          />
        )}
        {type === "Text position" && (
          <OptionBoxLargeHorizontalTextPosition
            showLabel={true}
            type={"Between"}
          />
        )}
        {type === "Text position" && (
          <OptionBoxLargeHorizontalTextPosition
            showLabel={true}
            type={"No text"}
          />
        )}
        {type === "Height of images" && (
          <OptionBoxLargeHorizontalImageHeightConsistency
            showLabel={true}
            type={"Even"}
          />
        )}
        {type === "Height of images" && (
          <OptionBoxLargeHorizontalImageHeightConsistency
            showLabel={true}
            type={"Uneven"}
          />
        )}
        {type === "Move section" && (
          <OptionBoxLargeHorizontalMoveSection type={"Up"} />
        )}
        {type === "Move section" && (
          <OptionBoxLargeHorizontalMoveSection type={"Down"} />
        )}
        {[
          "Mobile layout",
          "Tablet layout",
          "Laptop layout",
          "Desktop layout",
        ].includes(type) && <OptionBoxMediumSquareThumbnailLayout />}
        {[
          "Mobile layout",
          "Tablet layout",
          "Laptop layout",
          "Desktop layout",
        ].includes(type) && <OptionBoxMediumSquareThumbnailLayout />}
        {[
          "Mobile layout",
          "Tablet layout",
          "Laptop layout",
          "Desktop layout",
        ].includes(type) && <OptionBoxMediumSquareThumbnailLayout />}
        {[
          "Mobile layout",
          "Tablet layout",
          "Laptop layout",
          "Desktop layout",
        ].includes(type) && <OptionBoxMediumSquareThumbnailLayout />}
        {[
          "Mobile layout",
          "Tablet layout",
          "Laptop layout",
          "Desktop layout",
        ].includes(type) && <OptionBoxMediumSquareThumbnailLayout />}
        {["Mobile layout", "Laptop layout", "Desktop layout"].includes(
          type,
        ) && <OptionBoxMediumSquareThumbnailLayout />}
        {type === "Mobile layout" && <OptionBoxMediumSquareThumbnailLayout />}
        {type === "Mobile layout" && <OptionBoxMediumSquareThumbnailLayout />}
        {type === "Mobile layout" && <OptionBoxMediumSquareThumbnailLayout />}
        {type === "Mobile layout" && <OptionBoxMediumSquareThumbnailLayout />}
        {type === "Aspect ratio" && (
          <OptionBoxMediumSquareAspectRatio showLabel={true} type={"16:9"} />
        )}
        {type === "Aspect ratio" && (
          <OptionBoxMediumSquareAspectRatio showLabel={true} type={"4:3"} />
        )}
        {type === "Aspect ratio" && (
          <OptionBoxMediumSquareAspectRatio showLabel={true} type={"1:1"} />
        )}
        {type === "Aspect ratio" && (
          <OptionBoxMediumSquareAspectRatio showLabel={true} type={"3:4"} />
        )}
        {type === "Aspect ratio" && (
          <OptionBoxMediumSquareAspectRatio showLabel={true} type={"9:16"} />
        )}
        {type === "Aspect ratio" && (
          <OptionBoxMediumSquareAspectRatio
            showLabel={true}
            type={"Original"}
          />
        )}
        {["Vertical align", "Horizontal align"].includes(type) && (
          <OptionBoxMediumSquareSectionAlignment
            showLabel={true}
            type={"3:4"}
          />
        )}
        {["Vertical align", "Horizontal align"].includes(type) && (
          <OptionBoxMediumSquareSectionAlignment
            showLabel={true}
            type={"9:16"}
          />
        )}
        {["Vertical align", "Horizontal align"].includes(type) && (
          <OptionBoxMediumSquareSectionAlignment
            showLabel={true}
            type={"Original"}
          />
        )}
        {type === "Animation" && (
          <OptionBoxMediumSquareAnimation showLabel={true} type={"None"} />
        )}
        {type === "Animation" && (
          <OptionBoxMediumSquareAnimation showLabel={true} type={"Rise"} />
        )}
        {type === "Animation" && (
          <OptionBoxMediumSquareAnimation showLabel={true} type={"Fall"} />
        )}
        {type === "Animation" && (
          <OptionBoxMediumSquareAnimation showLabel={true} type={"Pan left"} />
        )}
        {type === "Animation" && (
          <OptionBoxMediumSquareAnimation showLabel={true} type={"Pan right"} />
        )}
        {type === "Animation" && (
          <OptionBoxMediumSquareAnimation showLabel={true} type={"Fade in"} />
        )}
        {type === "Animation" && (
          <OptionBoxMediumSquareAnimation showLabel={true} type={"Move in"} />
        )}
        {type === "Animation" && (
          <OptionBoxMediumSquareAnimation showLabel={true} type={"Bring in"} />
        )}
        {type === "Animation" && (
          <OptionBoxMediumSquareAnimation showLabel={true} type={"Scale"} />
        )}
        {["Nav position normal", "Nav position sidebar"].includes(type) && (
          <OptionBoxSmallHorizontalNavPosition type={"Top"} hero={"Normal"} />
        )}
        {["Nav position normal", "Nav position sidebar"].includes(type) && (
          <OptionBoxSmallHorizontalNavPosition
            type={"Bottom"}
            hero={"Normal"}
          />
        )}
        {["Nav position normal", "Nav position sidebar"].includes(type) && (
          <OptionBoxSmallHorizontalNavPosition
            type={"Special"}
            hero={"Normal"}
          />
        )}
        {type === "Menu item" && (
          <OptionBoxSmallHorizontalMenuItem type={"Simple"} />
        )}
        {type === "Menu item" && (
          <OptionBoxSmallHorizontalMenuItem type={"Underlined"} />
        )}
        {type === "Menu item" && (
          <OptionBoxSmallHorizontalMenuItem type={"Boxed"} />
        )}
        {type === "Device style" && (
          <OptionBoxSmallThumbnailDevices type={"No device"} />
        )}
        {type === "Device style" && (
          <OptionBoxSmallThumbnailDevices type={"Outlined"} />
        )}
        {type === "Device style" && (
          <OptionBoxSmallThumbnailDevices type={"Simple"} />
        )}
        {type === "Device style" && (
          <OptionBoxSmallThumbnailDevices type={"Browser"} />
        )}
        {type === "Device style" && (
          <OptionBoxSmallThumbnailDevices type={"Semi-real"} />
        )}
        {type === "Device style" && (
          <OptionBoxSmallThumbnailDevices type={"Realistic"} />
        )}
        {type === "Device camera" && (
          <OptionBoxSmallFrontCamera type={"Simple"} />
        )}
        {type === "Device camera" && (
          <OptionBoxSmallFrontCamera type={"Notch"} />
        )}
        {type === "Device camera" && (
          <OptionBoxSmallFrontCamera type={"Cutout"} />
        )}
        {type === "Corner radius" && (
          <OptionBoxSmallThumbnailDeviceCorner type={"Sharp"} />
        )}
        {type === "Corner radius" && (
          <OptionBoxSmallThumbnailDeviceCorner type={"Rounded"} />
        )}
        {type === "Device color" && (
          <OptionBoxSmallThumbnailDeviceColor type={"Dark"} />
        )}
        {type === "Device color" && (
          <OptionBoxSmallThumbnailDeviceColor type={"Light"} />
        )}
        {type === "Device type" && <OptionBoxSmallDeviceStyles type={"None"} />}
        {type === "Device type" && (
          <OptionBoxSmallDeviceStyles type={"Mobile"} />
        )}
        {type === "Device type" && (
          <OptionBoxSmallDeviceStyles type={"Tablet"} />
        )}
        {type === "Device type" && (
          <OptionBoxSmallDeviceStyles type={"Laptop"} />
        )}
        {type === "Device type" && (
          <OptionBoxSmallDeviceStyles type={"Desktop"} />
        )}
        {type === "Shadow" && <OptionBoxSmallDeviceShadow type={"None"} />}
        {type === "Shadow" && <OptionBoxSmallDeviceShadow type={"Shadow"} />}
        {type === "Line weight" && (
          <OptionBoxSmallDividerLineWeight type={"Light"} />
        )}
        {type === "Line weight" && (
          <OptionBoxSmallDividerLineWeight type={"Medium"} />
        )}
        {type === "Line weight" && (
          <OptionBoxSmallDividerLineWeight type={"Bold"} />
        )}
        {type === "Image shape" && <OptionBoxSmallImageShape type={"Sharp"} />}
        {type === "Image shape" && (
          <OptionBoxSmallImageShape type={"Super rounded rectangle"} />
        )}
        {type === "Image shape" && <OptionBoxSmallImageShape type={"Oval"} />}
        {type === "Image shape" && <OptionBoxSmallImageShape type={"Arch"} />}
      </StyledGrid>
      {isHardToSee && (
        <MessageAlert
          hasIcon={false}
          hasTitle={false}
          type={"Info"}
          mode={"Dark"}
        />
      )}
    </StyledRoot>
  );
});
