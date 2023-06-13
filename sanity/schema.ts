import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Landing Page
 *
 *
 */
export interface LandingPage extends SanityDocument {
  _type: "landingPage";

  /**
   * Title Hero Box — `string`
   *
   *
   */
  titleHeroBox?: string;

  /**
   * Content Hero Box — `text`
   *
   *
   */
  contentHeroBox?: string;

  /**
   * Contact Button Text — `string`
   *
   *
   */
  contactButtonText?: string;

  /**
   * Services Button Text — `string`
   *
   *
   */
  servicesButtonText?: string;

  /**
   * Image Hero Box — `image`
   *
   *
   */
  imageHeroBox?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Title Services — `string`
   *
   *
   */
  titleServices?: string;

  /**
   * Subtitle Services — `string`
   *
   *
   */
  subtitleServices?: string;
}

export type Documents = LandingPage;
