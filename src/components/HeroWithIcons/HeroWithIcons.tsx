import React from "react";
import styled, { css } from "styled-components";
import { HeroBulletpoint } from "../HeroBulletpoint";
import { InfoWidget } from "../InfoWidget";

export interface HeroWithIconsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showInfoWidget" | "device"
> {
  showInfoWidget?: boolean;
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    position: relative;
    overflow: hidden;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 20px;
            padding-bottom: 0px;
            padding-left: 20px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: fit-content;
            height: 900px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            background-color: ${"#003a92"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["accent"]["accentWhite"]};
  `,
);

const StyledHero = styled.section(
  () => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 84px;
    padding-bottom: 10px;
    padding-left: 84px;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    height: 700px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledImage = styled.div(
  () => css`
    position: absolute;
    left: -187px;
    top: -73px;
    width: 1835px;
    height: 847px;
  `,
);

const StyledRectangle4134309 = styled.div(
  () => css`
    width: 1762px;
    height: 771px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #003a92;
    border-radius: 0px;
  `,
);

const Styledimage4 = styled.div(
  () => css`
    width: 1714px;
    height: 795px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const Styledimage44696 = styled.div(
  () => css`
    width: 1654px;
    height: 767px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const Styledimage44695 = styled.div(
  () => css`
    width: 1164.281982421875px;
    height: 525.5439453125px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTextContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 500px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledHeadlineGoesHereEmpoweringCentered = styled.h1(
  ({ theme }) => css`
    color: ${theme["text"]["textOnDarkDefault"]};
    font-family: "Georgia";
    font-size: 40px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
  `,
);

const StyledSpaceForSubheadingHereThatSupportsTheEmpoweringTitleInTwoLines =
  styled.p(
    () => css`
      color: #ffffff;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
    `,
  );

const StyledBulletpoints = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledRow = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRow2 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledImage2 = styled.div(
  ({ theme }) => css`
    position: relative;
    position: absolute;
    left: -363px;
    top: -17.666671752929688px;
    width: 2121.7939453125px;
    height: 834px;
    background-color: ${theme["background"]["bgBrand"]};
    border-radius: 0px;
  `,
);

const StyledImage3 = styled.div(
  () => css`
    position: absolute;
    left: -129px;
    top: 0px;
    width: 1797.3369140625px;
    height: 834px;
  `,
);

const Styledimage5 = styled.div(
  () => css`
    width: 1797.3369140625px;
    height: 834px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const Styledimage42 = styled.div(
  () => css`
    width: 1201.941162109375px;
    height: 557.4866333007812px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledInfo = styled.section(
  () => css`
    position: absolute;
    left: 20px;
    top: 45.765625px;
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 350px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTextContent2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledHeadlineGoesHereEmpowering = styled.h2(
  () => css`
    color: #ffffff;
    font-family: "Georgia";
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.005em;
  `,
);

const StyledSpaceForSubheadingHereThatSupportsTheEmpoweringTitleInTwoLines2 =
  styled.p(
    () => css`
      color: #ffffff;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
    `,
  );

const StyledBulletpoints2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledHeroBulletpoint = styled.li(() => css``);

const StyledHeroBulletpoint2 = styled.li(() => css``);

const StyledHeroBulletpoint3 = styled.li(() => css``);

const StyledHeroBulletpoint4 = styled.li(() => css``);

/** A hero banner component with headline, subheading, and icon-based bullet points. Supports Desktop (image + text + optional info widget) and Mobile (image + stacked info/text content) variants. The info widget visibility is togglable via a boolean prop. */
export const HeroWithIcons = React.forwardRef<HTMLElement, HeroWithIconsProps>(
  function HeroWithIcons(
    { showInfoWidget = true, device = "Desktop", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="region"
        aria-label="Hero section"
        {...rest}
        ref={ref}
        $device={device}
      >
        {device === "Desktop" && (
          <StyledHero>
            {device === "Desktop" && (
              <StyledImage>
                {device === "Desktop" && <StyledRectangle4134309 />}
                {device === "Desktop" && <Styledimage4 />}
                {device === "Desktop" && <Styledimage44696 />}
                {device === "Desktop" && <Styledimage44695 />}
              </StyledImage>
            )}
            {device === "Desktop" && (
              <StyledTextContent>
                {device === "Desktop" && (
                  <StyledText>
                    {device === "Desktop" && (
                      <StyledHeadlineGoesHereEmpoweringCentered>
                        {"Headline goes here empowering centered"}
                      </StyledHeadlineGoesHereEmpoweringCentered>
                    )}
                    {device === "Desktop" && (
                      <StyledSpaceForSubheadingHereThatSupportsTheEmpoweringTitleInTwoLines>
                        {
                          "Space for subheading here that supports the empowering title in two lines"
                        }
                      </StyledSpaceForSubheadingHereThatSupportsTheEmpoweringTitleInTwoLines>
                    )}
                  </StyledText>
                )}
                {device === "Desktop" && (
                  <StyledBulletpoints>
                    {device === "Desktop" && (
                      <StyledRow>
                        {device === "Desktop" && (
                          <HeroBulletpoint device={"Desktop"} />
                        )}
                        {device === "Desktop" && (
                          <HeroBulletpoint device={"Desktop"} />
                        )}
                      </StyledRow>
                    )}
                    {device === "Desktop" && (
                      <StyledRow2>
                        {device === "Desktop" && (
                          <HeroBulletpoint device={"Desktop"} />
                        )}
                        {device === "Desktop" && (
                          <HeroBulletpoint device={"Desktop"} />
                        )}
                      </StyledRow2>
                    )}
                  </StyledBulletpoints>
                )}
              </StyledTextContent>
            )}
            {showInfoWidget && <InfoWidget device={"Web"} />}
          </StyledHero>
        )}
        {device === "Mobile" && (
          <StyledImage2>
            {device === "Mobile" && (
              <StyledImage3>
                {device === "Mobile" && <Styledimage5 />}
                {device === "Mobile" && <Styledimage42 />}
              </StyledImage3>
            )}
          </StyledImage2>
        )}
        {showInfoWidget && <InfoWidget device={"Mobile"} />}
        {device === "Mobile" && (
          <StyledInfo>
            {device === "Mobile" && (
              <StyledTextContent2>
                {device === "Mobile" && (
                  <StyledHeadlineGoesHereEmpowering>
                    {"Headline goes here empowering"}
                  </StyledHeadlineGoesHereEmpowering>
                )}
                {device === "Mobile" && (
                  <StyledSpaceForSubheadingHereThatSupportsTheEmpoweringTitleInTwoLines2>
                    {
                      "Space for subheading here that supports the empowering title in two lines"
                    }
                  </StyledSpaceForSubheadingHereThatSupportsTheEmpoweringTitleInTwoLines2>
                )}
              </StyledTextContent2>
            )}
            {device === "Mobile" && (
              <StyledBulletpoints2>
                {device === "Mobile" && (
                  <StyledHeroBulletpoint>
                    <HeroBulletpoint device={"Mobile"} />
                  </StyledHeroBulletpoint>
                )}
                {device === "Mobile" && (
                  <StyledHeroBulletpoint2>
                    <HeroBulletpoint device={"Mobile"} />
                  </StyledHeroBulletpoint2>
                )}
                {device === "Mobile" && (
                  <StyledHeroBulletpoint3>
                    <HeroBulletpoint device={"Mobile"} />
                  </StyledHeroBulletpoint3>
                )}
                {device === "Mobile" && (
                  <StyledHeroBulletpoint4>
                    <HeroBulletpoint device={"Mobile"} />
                  </StyledHeroBulletpoint4>
                )}
              </StyledBulletpoints2>
            )}
          </StyledInfo>
        )}
      </StyledRoot>
    );
  },
);
