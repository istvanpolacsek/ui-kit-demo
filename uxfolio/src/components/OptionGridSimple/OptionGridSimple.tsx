import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { OptionBoxSmallHorizontalBackground } from "../OptionBoxSmallHorizontalBackground";
import { OptionBoxLargeHorizontalTextPosition } from "../OptionBoxLargeHorizontalTextPosition";
import { OptionBoxLargeHorizontalImageHeightConsistency } from "../OptionBoxLargeHorizontalImageHeightConsistency";
import { OptionBoxLargeHorizontalMoveSection } from "../OptionBoxLargeHorizontalMoveSection";
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

const StyledGrid = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
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

const StyledOptionBoxSmallHorizontalBackground = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalBackground2 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalBackground3 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalBackground4 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalBackground5 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalBackground6 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalBackground7 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalBackground8 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalBackground9 = styled.li(() => css``);

const StyledOptionBoxLargeHorizontalTextPosition = styled.li(() => css``);

const StyledOptionBoxLargeHorizontalTextPosition2 = styled.li(() => css``);

const StyledOptionBoxLargeHorizontalTextPosition3 = styled.li(() => css``);

const StyledOptionBoxLargeHorizontalTextPosition4 = styled.li(() => css``);

const StyledOptionBoxLargeHorizontalImageHeightConsistency = styled.li(
  () => css``,
);

const StyledOptionBoxLargeHorizontalImageHeightConsistency2 = styled.li(
  () => css``,
);

const StyledOptionBoxLargeHorizontalMoveSection = styled.li(() => css``);

const StyledOptionBoxLargeHorizontalMoveSection2 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAspectRatio = styled.li(() => css``);

const StyledOptionBoxMediumSquareAspectRatio2 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAspectRatio3 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAspectRatio4 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAspectRatio5 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAspectRatio6 = styled.li(() => css``);

const StyledOptionBoxMediumSquareSectionAlignment = styled.li(() => css``);

const StyledOptionBoxMediumSquareSectionAlignment2 = styled.li(() => css``);

const StyledOptionBoxMediumSquareSectionAlignment3 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAnimation = styled.li(() => css``);

const StyledOptionBoxMediumSquareAnimation2 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAnimation3 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAnimation4 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAnimation5 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAnimation6 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAnimation7 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAnimation8 = styled.li(() => css``);

const StyledOptionBoxMediumSquareAnimation9 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalNavPosition = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalNavPosition2 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalNavPosition3 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalMenuItem = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalMenuItem2 = styled.li(() => css``);

const StyledOptionBoxSmallHorizontalMenuItem3 = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDevices = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDevices2 = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDevices3 = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDevices4 = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDevices5 = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDevices6 = styled.li(() => css``);

const StyledOptionBoxSmallFrontCamera = styled.li(() => css``);

const StyledOptionBoxSmallFrontCamera2 = styled.li(() => css``);

const StyledOptionBoxSmallFrontCamera3 = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDeviceCorner = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDeviceCorner2 = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDeviceColor = styled.li(() => css``);

const StyledOptionBoxSmallThumbnailDeviceColor2 = styled.li(() => css``);

const StyledOptionBoxSmallDeviceStyles = styled.li(() => css``);

const StyledOptionBoxSmallDeviceStyles2 = styled.li(() => css``);

const StyledOptionBoxSmallDeviceStyles3 = styled.li(() => css``);

const StyledOptionBoxSmallDeviceStyles4 = styled.li(() => css``);

const StyledOptionBoxSmallDeviceStyles5 = styled.li(() => css``);

const StyledOptionBoxSmallDeviceShadow = styled.li(() => css``);

const StyledOptionBoxSmallDeviceShadow2 = styled.li(() => css``);

const StyledOptionBoxSmallDividerLineWeight = styled.li(() => css``);

const StyledOptionBoxSmallDividerLineWeight2 = styled.li(() => css``);

const StyledOptionBoxSmallDividerLineWeight3 = styled.li(() => css``);

const StyledOptionBoxSmallImageShape = styled.li(() => css``);

const StyledOptionBoxSmallImageShape2 = styled.li(() => css``);

const StyledOptionBoxSmallImageShape3 = styled.li(() => css``);

const StyledOptionBoxSmallImageShape4 = styled.li(() => css``);

/** A grid of selectable option boxes for configuring a specific property (e.g. layout, aspect ratio, animation). Optionally includes a subheader label and an accessibility alert. Each variant surfaces a different set of option boxes relevant to the chosen property type. */
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
          <StyledOptionBoxSmallHorizontalBackground>
            <OptionBoxSmallHorizontalBackground type={"Transparent"} />
          </StyledOptionBoxSmallHorizontalBackground>
        )}
        {type === "Section background" && (
          <StyledOptionBoxSmallHorizontalBackground2>
            <OptionBoxSmallHorizontalBackground type={"Solid"} />
          </StyledOptionBoxSmallHorizontalBackground2>
        )}
        {type === "Section background" && (
          <StyledOptionBoxSmallHorizontalBackground3>
            <OptionBoxSmallHorizontalBackground type={"Vertical"} />
          </StyledOptionBoxSmallHorizontalBackground3>
        )}
        {type === "Section background" && (
          <StyledOptionBoxSmallHorizontalBackground4>
            <OptionBoxSmallHorizontalBackground type={"Horizontal"} />
          </StyledOptionBoxSmallHorizontalBackground4>
        )}
        {type === "Section background" && (
          <StyledOptionBoxSmallHorizontalBackground5>
            <OptionBoxSmallHorizontalBackground type={"Left corner"} />
          </StyledOptionBoxSmallHorizontalBackground5>
        )}
        {type === "Section background" && (
          <StyledOptionBoxSmallHorizontalBackground6>
            <OptionBoxSmallHorizontalBackground type={"Right corner"} />
          </StyledOptionBoxSmallHorizontalBackground6>
        )}
        {type === "Section background" && (
          <StyledOptionBoxSmallHorizontalBackground7>
            <OptionBoxSmallHorizontalBackground type={"Radial"} />
          </StyledOptionBoxSmallHorizontalBackground7>
        )}
        {type === "Section background" && (
          <StyledOptionBoxSmallHorizontalBackground8>
            <OptionBoxSmallHorizontalBackground type={"Corner"} />
          </StyledOptionBoxSmallHorizontalBackground8>
        )}
        {type === "Section background" && (
          <StyledOptionBoxSmallHorizontalBackground9>
            <OptionBoxSmallHorizontalBackground type={"Special"} />
          </StyledOptionBoxSmallHorizontalBackground9>
        )}
        {["Text position", "Hero layout"].includes(type) && (
          <StyledOptionBoxLargeHorizontalTextPosition>
            <OptionBoxLargeHorizontalTextPosition
              showLabel={true}
              type={"Below"}
            />
          </StyledOptionBoxLargeHorizontalTextPosition>
        )}
        {["Text position", "Hero layout"].includes(type) && (
          <StyledOptionBoxLargeHorizontalTextPosition2>
            <OptionBoxLargeHorizontalTextPosition
              showLabel={true}
              type={"Above"}
            />
          </StyledOptionBoxLargeHorizontalTextPosition2>
        )}
        {type === "Text position" && (
          <StyledOptionBoxLargeHorizontalTextPosition3>
            <OptionBoxLargeHorizontalTextPosition
              showLabel={true}
              type={"Between"}
            />
          </StyledOptionBoxLargeHorizontalTextPosition3>
        )}
        {type === "Text position" && (
          <StyledOptionBoxLargeHorizontalTextPosition4>
            <OptionBoxLargeHorizontalTextPosition
              showLabel={true}
              type={"No text"}
            />
          </StyledOptionBoxLargeHorizontalTextPosition4>
        )}
        {type === "Height of images" && (
          <StyledOptionBoxLargeHorizontalImageHeightConsistency>
            <OptionBoxLargeHorizontalImageHeightConsistency
              showLabel={true}
              type={"Even"}
            />
          </StyledOptionBoxLargeHorizontalImageHeightConsistency>
        )}
        {type === "Height of images" && (
          <StyledOptionBoxLargeHorizontalImageHeightConsistency2>
            <OptionBoxLargeHorizontalImageHeightConsistency
              showLabel={true}
              type={"Uneven"}
            />
          </StyledOptionBoxLargeHorizontalImageHeightConsistency2>
        )}
        {type === "Move section" && (
          <StyledOptionBoxLargeHorizontalMoveSection>
            <OptionBoxLargeHorizontalMoveSection type={"Up"} />
          </StyledOptionBoxLargeHorizontalMoveSection>
        )}
        {type === "Move section" && (
          <StyledOptionBoxLargeHorizontalMoveSection2>
            <OptionBoxLargeHorizontalMoveSection type={"Down"} />
          </StyledOptionBoxLargeHorizontalMoveSection2>
        )}
        {type === "Aspect ratio" && (
          <StyledOptionBoxMediumSquareAspectRatio>
            <OptionBoxMediumSquareAspectRatio showLabel={true} type={"16:9"} />
          </StyledOptionBoxMediumSquareAspectRatio>
        )}
        {type === "Aspect ratio" && (
          <StyledOptionBoxMediumSquareAspectRatio2>
            <OptionBoxMediumSquareAspectRatio showLabel={true} type={"4:3"} />
          </StyledOptionBoxMediumSquareAspectRatio2>
        )}
        {type === "Aspect ratio" && (
          <StyledOptionBoxMediumSquareAspectRatio3>
            <OptionBoxMediumSquareAspectRatio showLabel={true} type={"1:1"} />
          </StyledOptionBoxMediumSquareAspectRatio3>
        )}
        {type === "Aspect ratio" && (
          <StyledOptionBoxMediumSquareAspectRatio4>
            <OptionBoxMediumSquareAspectRatio showLabel={true} type={"3:4"} />
          </StyledOptionBoxMediumSquareAspectRatio4>
        )}
        {type === "Aspect ratio" && (
          <StyledOptionBoxMediumSquareAspectRatio5>
            <OptionBoxMediumSquareAspectRatio showLabel={true} type={"9:16"} />
          </StyledOptionBoxMediumSquareAspectRatio5>
        )}
        {type === "Aspect ratio" && (
          <StyledOptionBoxMediumSquareAspectRatio6>
            <OptionBoxMediumSquareAspectRatio
              showLabel={true}
              type={"Original"}
            />
          </StyledOptionBoxMediumSquareAspectRatio6>
        )}
        {["Vertical align", "Horizontal align"].includes(type) && (
          <StyledOptionBoxMediumSquareSectionAlignment>
            <OptionBoxMediumSquareSectionAlignment
              showLabel={true}
              type={"3:4"}
            />
          </StyledOptionBoxMediumSquareSectionAlignment>
        )}
        {["Vertical align", "Horizontal align"].includes(type) && (
          <StyledOptionBoxMediumSquareSectionAlignment2>
            <OptionBoxMediumSquareSectionAlignment
              showLabel={true}
              type={"9:16"}
            />
          </StyledOptionBoxMediumSquareSectionAlignment2>
        )}
        {["Vertical align", "Horizontal align"].includes(type) && (
          <StyledOptionBoxMediumSquareSectionAlignment3>
            <OptionBoxMediumSquareSectionAlignment
              showLabel={true}
              type={"Original"}
            />
          </StyledOptionBoxMediumSquareSectionAlignment3>
        )}
        {type === "Animation" && (
          <StyledOptionBoxMediumSquareAnimation>
            <OptionBoxMediumSquareAnimation showLabel={true} type={"None"} />
          </StyledOptionBoxMediumSquareAnimation>
        )}
        {type === "Animation" && (
          <StyledOptionBoxMediumSquareAnimation2>
            <OptionBoxMediumSquareAnimation showLabel={true} type={"Rise"} />
          </StyledOptionBoxMediumSquareAnimation2>
        )}
        {type === "Animation" && (
          <StyledOptionBoxMediumSquareAnimation3>
            <OptionBoxMediumSquareAnimation showLabel={true} type={"Fall"} />
          </StyledOptionBoxMediumSquareAnimation3>
        )}
        {type === "Animation" && (
          <StyledOptionBoxMediumSquareAnimation4>
            <OptionBoxMediumSquareAnimation
              showLabel={true}
              type={"Pan left"}
            />
          </StyledOptionBoxMediumSquareAnimation4>
        )}
        {type === "Animation" && (
          <StyledOptionBoxMediumSquareAnimation5>
            <OptionBoxMediumSquareAnimation
              showLabel={true}
              type={"Pan right"}
            />
          </StyledOptionBoxMediumSquareAnimation5>
        )}
        {type === "Animation" && (
          <StyledOptionBoxMediumSquareAnimation6>
            <OptionBoxMediumSquareAnimation showLabel={true} type={"Fade in"} />
          </StyledOptionBoxMediumSquareAnimation6>
        )}
        {type === "Animation" && (
          <StyledOptionBoxMediumSquareAnimation7>
            <OptionBoxMediumSquareAnimation showLabel={true} type={"Move in"} />
          </StyledOptionBoxMediumSquareAnimation7>
        )}
        {type === "Animation" && (
          <StyledOptionBoxMediumSquareAnimation8>
            <OptionBoxMediumSquareAnimation
              showLabel={true}
              type={"Bring in"}
            />
          </StyledOptionBoxMediumSquareAnimation8>
        )}
        {type === "Animation" && (
          <StyledOptionBoxMediumSquareAnimation9>
            <OptionBoxMediumSquareAnimation showLabel={true} type={"Scale"} />
          </StyledOptionBoxMediumSquareAnimation9>
        )}
        {["Nav position normal", "Nav position sidebar"].includes(type) && (
          <StyledOptionBoxSmallHorizontalNavPosition>
            <OptionBoxSmallHorizontalNavPosition type={"Top"} hero={"Normal"} />
          </StyledOptionBoxSmallHorizontalNavPosition>
        )}
        {["Nav position normal", "Nav position sidebar"].includes(type) && (
          <StyledOptionBoxSmallHorizontalNavPosition2>
            <OptionBoxSmallHorizontalNavPosition
              type={"Bottom"}
              hero={"Normal"}
            />
          </StyledOptionBoxSmallHorizontalNavPosition2>
        )}
        {["Nav position normal", "Nav position sidebar"].includes(type) && (
          <StyledOptionBoxSmallHorizontalNavPosition3>
            <OptionBoxSmallHorizontalNavPosition
              type={"Special"}
              hero={"Normal"}
            />
          </StyledOptionBoxSmallHorizontalNavPosition3>
        )}
        {type === "Menu item" && (
          <StyledOptionBoxSmallHorizontalMenuItem>
            <OptionBoxSmallHorizontalMenuItem type={"Simple"} />
          </StyledOptionBoxSmallHorizontalMenuItem>
        )}
        {type === "Menu item" && (
          <StyledOptionBoxSmallHorizontalMenuItem2>
            <OptionBoxSmallHorizontalMenuItem type={"Underlined"} />
          </StyledOptionBoxSmallHorizontalMenuItem2>
        )}
        {type === "Menu item" && (
          <StyledOptionBoxSmallHorizontalMenuItem3>
            <OptionBoxSmallHorizontalMenuItem type={"Boxed"} />
          </StyledOptionBoxSmallHorizontalMenuItem3>
        )}
        {type === "Device style" && (
          <StyledOptionBoxSmallThumbnailDevices>
            <OptionBoxSmallThumbnailDevices type={"No device"} />
          </StyledOptionBoxSmallThumbnailDevices>
        )}
        {type === "Device style" && (
          <StyledOptionBoxSmallThumbnailDevices2>
            <OptionBoxSmallThumbnailDevices type={"Outlined"} />
          </StyledOptionBoxSmallThumbnailDevices2>
        )}
        {type === "Device style" && (
          <StyledOptionBoxSmallThumbnailDevices3>
            <OptionBoxSmallThumbnailDevices type={"Simple"} />
          </StyledOptionBoxSmallThumbnailDevices3>
        )}
        {type === "Device style" && (
          <StyledOptionBoxSmallThumbnailDevices4>
            <OptionBoxSmallThumbnailDevices type={"Browser"} />
          </StyledOptionBoxSmallThumbnailDevices4>
        )}
        {type === "Device style" && (
          <StyledOptionBoxSmallThumbnailDevices5>
            <OptionBoxSmallThumbnailDevices type={"Semi-real"} />
          </StyledOptionBoxSmallThumbnailDevices5>
        )}
        {type === "Device style" && (
          <StyledOptionBoxSmallThumbnailDevices6>
            <OptionBoxSmallThumbnailDevices type={"Realistic"} />
          </StyledOptionBoxSmallThumbnailDevices6>
        )}
        {type === "Device camera" && (
          <StyledOptionBoxSmallFrontCamera>
            <OptionBoxSmallFrontCamera type={"Simple"} />
          </StyledOptionBoxSmallFrontCamera>
        )}
        {type === "Device camera" && (
          <StyledOptionBoxSmallFrontCamera2>
            <OptionBoxSmallFrontCamera type={"Notch"} />
          </StyledOptionBoxSmallFrontCamera2>
        )}
        {type === "Device camera" && (
          <StyledOptionBoxSmallFrontCamera3>
            <OptionBoxSmallFrontCamera type={"Cutout"} />
          </StyledOptionBoxSmallFrontCamera3>
        )}
        {type === "Corner radius" && (
          <StyledOptionBoxSmallThumbnailDeviceCorner>
            <OptionBoxSmallThumbnailDeviceCorner type={"Sharp"} />
          </StyledOptionBoxSmallThumbnailDeviceCorner>
        )}
        {type === "Corner radius" && (
          <StyledOptionBoxSmallThumbnailDeviceCorner2>
            <OptionBoxSmallThumbnailDeviceCorner type={"Rounded"} />
          </StyledOptionBoxSmallThumbnailDeviceCorner2>
        )}
        {type === "Device color" && (
          <StyledOptionBoxSmallThumbnailDeviceColor>
            <OptionBoxSmallThumbnailDeviceColor type={"Dark"} />
          </StyledOptionBoxSmallThumbnailDeviceColor>
        )}
        {type === "Device color" && (
          <StyledOptionBoxSmallThumbnailDeviceColor2>
            <OptionBoxSmallThumbnailDeviceColor type={"Light"} />
          </StyledOptionBoxSmallThumbnailDeviceColor2>
        )}
        {type === "Device type" && (
          <StyledOptionBoxSmallDeviceStyles>
            <OptionBoxSmallDeviceStyles type={"None"} />
          </StyledOptionBoxSmallDeviceStyles>
        )}
        {type === "Device type" && (
          <StyledOptionBoxSmallDeviceStyles2>
            <OptionBoxSmallDeviceStyles type={"Mobile"} />
          </StyledOptionBoxSmallDeviceStyles2>
        )}
        {type === "Device type" && (
          <StyledOptionBoxSmallDeviceStyles3>
            <OptionBoxSmallDeviceStyles type={"Tablet"} />
          </StyledOptionBoxSmallDeviceStyles3>
        )}
        {type === "Device type" && (
          <StyledOptionBoxSmallDeviceStyles4>
            <OptionBoxSmallDeviceStyles type={"Laptop"} />
          </StyledOptionBoxSmallDeviceStyles4>
        )}
        {type === "Device type" && (
          <StyledOptionBoxSmallDeviceStyles5>
            <OptionBoxSmallDeviceStyles type={"Desktop"} />
          </StyledOptionBoxSmallDeviceStyles5>
        )}
        {type === "Shadow" && (
          <StyledOptionBoxSmallDeviceShadow>
            <OptionBoxSmallDeviceShadow type={"None"} />
          </StyledOptionBoxSmallDeviceShadow>
        )}
        {type === "Shadow" && (
          <StyledOptionBoxSmallDeviceShadow2>
            <OptionBoxSmallDeviceShadow type={"Shadow"} />
          </StyledOptionBoxSmallDeviceShadow2>
        )}
        {type === "Line weight" && (
          <StyledOptionBoxSmallDividerLineWeight>
            <OptionBoxSmallDividerLineWeight type={"Light"} />
          </StyledOptionBoxSmallDividerLineWeight>
        )}
        {type === "Line weight" && (
          <StyledOptionBoxSmallDividerLineWeight2>
            <OptionBoxSmallDividerLineWeight type={"Medium"} />
          </StyledOptionBoxSmallDividerLineWeight2>
        )}
        {type === "Line weight" && (
          <StyledOptionBoxSmallDividerLineWeight3>
            <OptionBoxSmallDividerLineWeight type={"Bold"} />
          </StyledOptionBoxSmallDividerLineWeight3>
        )}
        {type === "Image shape" && (
          <StyledOptionBoxSmallImageShape>
            <OptionBoxSmallImageShape type={"Sharp"} />
          </StyledOptionBoxSmallImageShape>
        )}
        {type === "Image shape" && (
          <StyledOptionBoxSmallImageShape2>
            <OptionBoxSmallImageShape type={"Super rounded rectangle"} />
          </StyledOptionBoxSmallImageShape2>
        )}
        {type === "Image shape" && (
          <StyledOptionBoxSmallImageShape3>
            <OptionBoxSmallImageShape type={"Oval"} />
          </StyledOptionBoxSmallImageShape3>
        )}
        {type === "Image shape" && (
          <StyledOptionBoxSmallImageShape4>
            <OptionBoxSmallImageShape type={"Arch"} />
          </StyledOptionBoxSmallImageShape4>
        )}
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
