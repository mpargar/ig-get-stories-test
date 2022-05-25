import httpRequest from "../utils/httpRequest";

const endpointBasePath = "https://graph.facebook.com/v13.0";

export const getFacebookUserDataService = async (token: string) =>
  httpRequest.get(`${endpointBasePath}/me/accounts?access_token=${token}`);

/**
 *
 * @param accountDataId you can get it from the facebook context state -> accountsData?.id
 * @param token
 */
export const getInstagramAccountService = async (
  accountDataId: string,
  token: string
) =>
  httpRequest.get(
    `${endpointBasePath}/${accountDataId}?fields=instagram_business_account&access_token=${token}`
  );
/**
 *
 * @param instagramBussinessId you can get it from the facebook context state -> instagramBussinessId
 * @param token
 */
export const getIgStoriesService = async (
  instagramBussinessId: string,
  token: string
) =>
  httpRequest.get(
    `${endpointBasePath}/${instagramBussinessId}/stories?fields=id,username,media_url,media_type,media_product_type,comments_count,thumbnail_url,timestamp,owner,caption,ig_id,shortcode,permalink&access_token=${token}`
  );

export const getIgMediaById = async (mediaId: string, token: string) => {
  return httpRequest.get(
    `${endpointBasePath}/${mediaId}?fields=id,ig_id,media_product_type,owner,media_url,timestamp,username,shortcode,like_count&access_token=${token}`
  );
};
