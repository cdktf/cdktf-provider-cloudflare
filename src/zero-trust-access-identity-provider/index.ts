/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#account_id ZeroTrustAccessIdentityProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * The configuration parameters for the identity provider. To view the required parameters for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#config ZeroTrustAccessIdentityProvider#config}
  */
  readonly config: ZeroTrustAccessIdentityProviderConfigA;
  /**
  * The name of the identity provider, shown to users on the login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#name ZeroTrustAccessIdentityProvider#name}
  */
  readonly name: string;
  /**
  * The configuration settings for enabling a System for Cross-Domain Identity Management (SCIM) with the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#scim_config ZeroTrustAccessIdentityProvider#scim_config}
  */
  readonly scimConfig?: ZeroTrustAccessIdentityProviderScimConfig;
  /**
  * The type of identity provider. To determine the value for a specific provider, refer to our [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
  * Available values: "onetimepin", "azureAD", "saml", "centrify", "facebook", "github", "google-apps", "google", "linkedin", "oidc", "okta", "onelogin", "pingone", "yandex".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#type ZeroTrustAccessIdentityProvider#type}
  */
  readonly type: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#zone_id ZeroTrustAccessIdentityProvider#zone_id}
  */
  readonly zoneId?: string;
}
export interface ZeroTrustAccessIdentityProviderConfigHeaderAttributes {
  /**
  * attribute name from the IDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#attribute_name ZeroTrustAccessIdentityProvider#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * header that will be added on the request to the origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#header_name ZeroTrustAccessIdentityProvider#header_name}
  */
  readonly headerName?: string;
}

export function zeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform(struct?: ZeroTrustAccessIdentityProviderConfigHeaderAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function zeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform(struct?: ZeroTrustAccessIdentityProviderConfigHeaderAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZeroTrustAccessIdentityProviderConfigHeaderAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessIdentityProviderConfigHeaderAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._headerName = value.headerName;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}

export class ZeroTrustAccessIdentityProviderConfigHeaderAttributesList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference {
    return new ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessIdentityProviderConfigA {
  /**
  * Your companies TLD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#apps_domain ZeroTrustAccessIdentityProvider#apps_domain}
  */
  readonly appsDomain?: string;
  /**
  * A list of SAML attribute names that will be added to your signed JWT token and can be used in SAML policy rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#attributes ZeroTrustAccessIdentityProvider#attributes}
  */
  readonly attributes?: string[];
  /**
  * The authorization_endpoint URL of your IdP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#auth_url ZeroTrustAccessIdentityProvider#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Your okta authorization server id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#authorization_server_id ZeroTrustAccessIdentityProvider#authorization_server_id}
  */
  readonly authorizationServerId?: string;
  /**
  * Your centrify account url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#centrify_account ZeroTrustAccessIdentityProvider#centrify_account}
  */
  readonly centrifyAccount?: string;
  /**
  * Your centrify app id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#centrify_app_id ZeroTrustAccessIdentityProvider#centrify_app_id}
  */
  readonly centrifyAppId?: string;
  /**
  * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#certs_url ZeroTrustAccessIdentityProvider#certs_url}
  */
  readonly certsUrl?: string;
  /**
  * Custom claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#claims ZeroTrustAccessIdentityProvider#claims}
  */
  readonly claims?: string[];
  /**
  * Your OAuth Client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#client_id ZeroTrustAccessIdentityProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Your OAuth Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#client_secret ZeroTrustAccessIdentityProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Should Cloudflare try to load authentication contexts from your account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#conditional_access_enabled ZeroTrustAccessIdentityProvider#conditional_access_enabled}
  */
  readonly conditionalAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Your Azure directory uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#directory_id ZeroTrustAccessIdentityProvider#directory_id}
  */
  readonly directoryId?: string;
  /**
  * The attribute name for email in the SAML response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#email_attribute_name ZeroTrustAccessIdentityProvider#email_attribute_name}
  */
  readonly emailAttributeName?: string;
  /**
  * The claim name for email in the id_token response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#email_claim_name ZeroTrustAccessIdentityProvider#email_claim_name}
  */
  readonly emailClaimName?: string;
  /**
  * Add a list of attribute names that will be returned in the response header from the Access callback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#header_attributes ZeroTrustAccessIdentityProvider#header_attributes}
  */
  readonly headerAttributes?: ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] | cdktf.IResolvable;
  /**
  * X509 certificate to verify the signature in the SAML authentication response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#idp_public_certs ZeroTrustAccessIdentityProvider#idp_public_certs}
  */
  readonly idpPublicCerts?: string[];
  /**
  * IdP Entity ID or Issuer URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#issuer_url ZeroTrustAccessIdentityProvider#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * Your okta account url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#okta_account ZeroTrustAccessIdentityProvider#okta_account}
  */
  readonly oktaAccount?: string;
  /**
  * Your OneLogin account url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#onelogin_account ZeroTrustAccessIdentityProvider#onelogin_account}
  */
  readonly oneloginAccount?: string;
  /**
  * Your PingOne environment identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#ping_env_id ZeroTrustAccessIdentityProvider#ping_env_id}
  */
  readonly pingEnvId?: string;
  /**
  * Enable Proof Key for Code Exchange (PKCE)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#pkce_enabled ZeroTrustAccessIdentityProvider#pkce_enabled}
  */
  readonly pkceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the type of user interaction that is required. prompt=login forces the user to enter their credentials on that request, negating single-sign on. prompt=none is the opposite. It ensures that the user isn't presented with any interactive prompt. If the request can't be completed silently by using single-sign on, the Microsoft identity platform returns an interaction_required error. prompt=select_account interrupts single sign-on providing account selection experience listing all the accounts either in session or any remembered account or an option to choose to use a different account altogether.
  * Available values: "login", "select_account", "none".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#prompt ZeroTrustAccessIdentityProvider#prompt}
  */
  readonly prompt?: string;
  /**
  * OAuth scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#scopes ZeroTrustAccessIdentityProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * Sign the SAML authentication request with Access credentials. To verify the signature, use the public key from the Access certs endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#sign_request ZeroTrustAccessIdentityProvider#sign_request}
  */
  readonly signRequest?: boolean | cdktf.IResolvable;
  /**
  * URL to send the SAML authentication requests to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#sso_target_url ZeroTrustAccessIdentityProvider#sso_target_url}
  */
  readonly ssoTargetUrl?: string;
  /**
  * Should Cloudflare try to load groups from your account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#support_groups ZeroTrustAccessIdentityProvider#support_groups}
  */
  readonly supportGroups?: boolean | cdktf.IResolvable;
  /**
  * The token_endpoint URL of your IdP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#token_url ZeroTrustAccessIdentityProvider#token_url}
  */
  readonly tokenUrl?: string;
}

export function zeroTrustAccessIdentityProviderConfigAToTerraform(struct?: ZeroTrustAccessIdentityProviderConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps_domain: cdktf.stringToTerraform(struct!.appsDomain),
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    authorization_server_id: cdktf.stringToTerraform(struct!.authorizationServerId),
    centrify_account: cdktf.stringToTerraform(struct!.centrifyAccount),
    centrify_app_id: cdktf.stringToTerraform(struct!.centrifyAppId),
    certs_url: cdktf.stringToTerraform(struct!.certsUrl),
    claims: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.claims),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    conditional_access_enabled: cdktf.booleanToTerraform(struct!.conditionalAccessEnabled),
    directory_id: cdktf.stringToTerraform(struct!.directoryId),
    email_attribute_name: cdktf.stringToTerraform(struct!.emailAttributeName),
    email_claim_name: cdktf.stringToTerraform(struct!.emailClaimName),
    header_attributes: cdktf.listMapper(zeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform, false)(struct!.headerAttributes),
    idp_public_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.idpPublicCerts),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    okta_account: cdktf.stringToTerraform(struct!.oktaAccount),
    onelogin_account: cdktf.stringToTerraform(struct!.oneloginAccount),
    ping_env_id: cdktf.stringToTerraform(struct!.pingEnvId),
    pkce_enabled: cdktf.booleanToTerraform(struct!.pkceEnabled),
    prompt: cdktf.stringToTerraform(struct!.prompt),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    sign_request: cdktf.booleanToTerraform(struct!.signRequest),
    sso_target_url: cdktf.stringToTerraform(struct!.ssoTargetUrl),
    support_groups: cdktf.booleanToTerraform(struct!.supportGroups),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function zeroTrustAccessIdentityProviderConfigAToHclTerraform(struct?: ZeroTrustAccessIdentityProviderConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps_domain: {
      value: cdktf.stringToHclTerraform(struct!.appsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_server_id: {
      value: cdktf.stringToHclTerraform(struct!.authorizationServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    centrify_account: {
      value: cdktf.stringToHclTerraform(struct!.centrifyAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    centrify_app_id: {
      value: cdktf.stringToHclTerraform(struct!.centrifyAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certs_url: {
      value: cdktf.stringToHclTerraform(struct!.certsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.claims),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditional_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.conditionalAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    directory_id: {
      value: cdktf.stringToHclTerraform(struct!.directoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.emailAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_claim_name: {
      value: cdktf.stringToHclTerraform(struct!.emailClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_attributes: {
      value: cdktf.listMapperHcl(zeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform, false)(struct!.headerAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessIdentityProviderConfigHeaderAttributesList",
    },
    idp_public_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.idpPublicCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    okta_account: {
      value: cdktf.stringToHclTerraform(struct!.oktaAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    onelogin_account: {
      value: cdktf.stringToHclTerraform(struct!.oneloginAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_env_id: {
      value: cdktf.stringToHclTerraform(struct!.pingEnvId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkce_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pkceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sign_request: {
      value: cdktf.booleanToHclTerraform(struct!.signRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sso_target_url: {
      value: cdktf.stringToHclTerraform(struct!.ssoTargetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_groups: {
      value: cdktf.booleanToHclTerraform(struct!.supportGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessIdentityProviderConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessIdentityProviderConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsDomain = this._appsDomain;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._authorizationServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationServerId = this._authorizationServerId;
    }
    if (this._centrifyAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.centrifyAccount = this._centrifyAccount;
    }
    if (this._centrifyAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.centrifyAppId = this._centrifyAppId;
    }
    if (this._certsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certsUrl = this._certsUrl;
    }
    if (this._claims !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._conditionalAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalAccessEnabled = this._conditionalAccessEnabled;
    }
    if (this._directoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryId = this._directoryId;
    }
    if (this._emailAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAttributeName = this._emailAttributeName;
    }
    if (this._emailClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailClaimName = this._emailClaimName;
    }
    if (this._headerAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAttributes = this._headerAttributes?.internalValue;
    }
    if (this._idpPublicCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpPublicCerts = this._idpPublicCerts;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._oktaAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaAccount = this._oktaAccount;
    }
    if (this._oneloginAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneloginAccount = this._oneloginAccount;
    }
    if (this._pingEnvId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingEnvId = this._pingEnvId;
    }
    if (this._pkceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkceEnabled = this._pkceEnabled;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._signRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.signRequest = this._signRequest;
    }
    if (this._ssoTargetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoTargetUrl = this._ssoTargetUrl;
    }
    if (this._supportGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportGroups = this._supportGroups;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessIdentityProviderConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appsDomain = undefined;
      this._attributes = undefined;
      this._authUrl = undefined;
      this._authorizationServerId = undefined;
      this._centrifyAccount = undefined;
      this._centrifyAppId = undefined;
      this._certsUrl = undefined;
      this._claims = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._conditionalAccessEnabled = undefined;
      this._directoryId = undefined;
      this._emailAttributeName = undefined;
      this._emailClaimName = undefined;
      this._headerAttributes.internalValue = undefined;
      this._idpPublicCerts = undefined;
      this._issuerUrl = undefined;
      this._oktaAccount = undefined;
      this._oneloginAccount = undefined;
      this._pingEnvId = undefined;
      this._pkceEnabled = undefined;
      this._prompt = undefined;
      this._scopes = undefined;
      this._signRequest = undefined;
      this._ssoTargetUrl = undefined;
      this._supportGroups = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appsDomain = value.appsDomain;
      this._attributes = value.attributes;
      this._authUrl = value.authUrl;
      this._authorizationServerId = value.authorizationServerId;
      this._centrifyAccount = value.centrifyAccount;
      this._centrifyAppId = value.centrifyAppId;
      this._certsUrl = value.certsUrl;
      this._claims = value.claims;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._conditionalAccessEnabled = value.conditionalAccessEnabled;
      this._directoryId = value.directoryId;
      this._emailAttributeName = value.emailAttributeName;
      this._emailClaimName = value.emailClaimName;
      this._headerAttributes.internalValue = value.headerAttributes;
      this._idpPublicCerts = value.idpPublicCerts;
      this._issuerUrl = value.issuerUrl;
      this._oktaAccount = value.oktaAccount;
      this._oneloginAccount = value.oneloginAccount;
      this._pingEnvId = value.pingEnvId;
      this._pkceEnabled = value.pkceEnabled;
      this._prompt = value.prompt;
      this._scopes = value.scopes;
      this._signRequest = value.signRequest;
      this._ssoTargetUrl = value.ssoTargetUrl;
      this._supportGroups = value.supportGroups;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // apps_domain - computed: false, optional: true, required: false
  private _appsDomain?: string; 
  public get appsDomain() {
    return this.getStringAttribute('apps_domain');
  }
  public set appsDomain(value: string) {
    this._appsDomain = value;
  }
  public resetAppsDomain() {
    this._appsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsDomainInput() {
    return this._appsDomain;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // authorization_server_id - computed: false, optional: true, required: false
  private _authorizationServerId?: string; 
  public get authorizationServerId() {
    return this.getStringAttribute('authorization_server_id');
  }
  public set authorizationServerId(value: string) {
    this._authorizationServerId = value;
  }
  public resetAuthorizationServerId() {
    this._authorizationServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationServerIdInput() {
    return this._authorizationServerId;
  }

  // centrify_account - computed: false, optional: true, required: false
  private _centrifyAccount?: string; 
  public get centrifyAccount() {
    return this.getStringAttribute('centrify_account');
  }
  public set centrifyAccount(value: string) {
    this._centrifyAccount = value;
  }
  public resetCentrifyAccount() {
    this._centrifyAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centrifyAccountInput() {
    return this._centrifyAccount;
  }

  // centrify_app_id - computed: false, optional: true, required: false
  private _centrifyAppId?: string; 
  public get centrifyAppId() {
    return this.getStringAttribute('centrify_app_id');
  }
  public set centrifyAppId(value: string) {
    this._centrifyAppId = value;
  }
  public resetCentrifyAppId() {
    this._centrifyAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centrifyAppIdInput() {
    return this._centrifyAppId;
  }

  // certs_url - computed: false, optional: true, required: false
  private _certsUrl?: string; 
  public get certsUrl() {
    return this.getStringAttribute('certs_url');
  }
  public set certsUrl(value: string) {
    this._certsUrl = value;
  }
  public resetCertsUrl() {
    this._certsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certsUrlInput() {
    return this._certsUrl;
  }

  // claims - computed: false, optional: true, required: false
  private _claims?: string[]; 
  public get claims() {
    return this.getListAttribute('claims');
  }
  public set claims(value: string[]) {
    this._claims = value;
  }
  public resetClaims() {
    this._claims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // conditional_access_enabled - computed: false, optional: true, required: false
  private _conditionalAccessEnabled?: boolean | cdktf.IResolvable; 
  public get conditionalAccessEnabled() {
    return this.getBooleanAttribute('conditional_access_enabled');
  }
  public set conditionalAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._conditionalAccessEnabled = value;
  }
  public resetConditionalAccessEnabled() {
    this._conditionalAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAccessEnabledInput() {
    return this._conditionalAccessEnabled;
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // email_attribute_name - computed: false, optional: true, required: false
  private _emailAttributeName?: string; 
  public get emailAttributeName() {
    return this.getStringAttribute('email_attribute_name');
  }
  public set emailAttributeName(value: string) {
    this._emailAttributeName = value;
  }
  public resetEmailAttributeName() {
    this._emailAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttributeNameInput() {
    return this._emailAttributeName;
  }

  // email_claim_name - computed: false, optional: true, required: false
  private _emailClaimName?: string; 
  public get emailClaimName() {
    return this.getStringAttribute('email_claim_name');
  }
  public set emailClaimName(value: string) {
    this._emailClaimName = value;
  }
  public resetEmailClaimName() {
    this._emailClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailClaimNameInput() {
    return this._emailClaimName;
  }

  // header_attributes - computed: false, optional: true, required: false
  private _headerAttributes = new ZeroTrustAccessIdentityProviderConfigHeaderAttributesList(this, "header_attributes", false);
  public get headerAttributes() {
    return this._headerAttributes;
  }
  public putHeaderAttributes(value: ZeroTrustAccessIdentityProviderConfigHeaderAttributes[] | cdktf.IResolvable) {
    this._headerAttributes.internalValue = value;
  }
  public resetHeaderAttributes() {
    this._headerAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerAttributesInput() {
    return this._headerAttributes.internalValue;
  }

  // idp_public_certs - computed: false, optional: true, required: false
  private _idpPublicCerts?: string[]; 
  public get idpPublicCerts() {
    return this.getListAttribute('idp_public_certs');
  }
  public set idpPublicCerts(value: string[]) {
    this._idpPublicCerts = value;
  }
  public resetIdpPublicCerts() {
    this._idpPublicCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpPublicCertsInput() {
    return this._idpPublicCerts;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // okta_account - computed: false, optional: true, required: false
  private _oktaAccount?: string; 
  public get oktaAccount() {
    return this.getStringAttribute('okta_account');
  }
  public set oktaAccount(value: string) {
    this._oktaAccount = value;
  }
  public resetOktaAccount() {
    this._oktaAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaAccountInput() {
    return this._oktaAccount;
  }

  // onelogin_account - computed: false, optional: true, required: false
  private _oneloginAccount?: string; 
  public get oneloginAccount() {
    return this.getStringAttribute('onelogin_account');
  }
  public set oneloginAccount(value: string) {
    this._oneloginAccount = value;
  }
  public resetOneloginAccount() {
    this._oneloginAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneloginAccountInput() {
    return this._oneloginAccount;
  }

  // ping_env_id - computed: false, optional: true, required: false
  private _pingEnvId?: string; 
  public get pingEnvId() {
    return this.getStringAttribute('ping_env_id');
  }
  public set pingEnvId(value: string) {
    this._pingEnvId = value;
  }
  public resetPingEnvId() {
    this._pingEnvId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingEnvIdInput() {
    return this._pingEnvId;
  }

  // pkce_enabled - computed: false, optional: true, required: false
  private _pkceEnabled?: boolean | cdktf.IResolvable; 
  public get pkceEnabled() {
    return this.getBooleanAttribute('pkce_enabled');
  }
  public set pkceEnabled(value: boolean | cdktf.IResolvable) {
    this._pkceEnabled = value;
  }
  public resetPkceEnabled() {
    this._pkceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceEnabledInput() {
    return this._pkceEnabled;
  }

  // prompt - computed: false, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // sign_request - computed: true, optional: true, required: false
  private _signRequest?: boolean | cdktf.IResolvable; 
  public get signRequest() {
    return this.getBooleanAttribute('sign_request');
  }
  public set signRequest(value: boolean | cdktf.IResolvable) {
    this._signRequest = value;
  }
  public resetSignRequest() {
    this._signRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signRequestInput() {
    return this._signRequest;
  }

  // sso_target_url - computed: false, optional: true, required: false
  private _ssoTargetUrl?: string; 
  public get ssoTargetUrl() {
    return this.getStringAttribute('sso_target_url');
  }
  public set ssoTargetUrl(value: string) {
    this._ssoTargetUrl = value;
  }
  public resetSsoTargetUrl() {
    this._ssoTargetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoTargetUrlInput() {
    return this._ssoTargetUrl;
  }

  // support_groups - computed: false, optional: true, required: false
  private _supportGroups?: boolean | cdktf.IResolvable; 
  public get supportGroups() {
    return this.getBooleanAttribute('support_groups');
  }
  public set supportGroups(value: boolean | cdktf.IResolvable) {
    this._supportGroups = value;
  }
  public resetSupportGroups() {
    this._supportGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportGroupsInput() {
    return this._supportGroups;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface ZeroTrustAccessIdentityProviderScimConfig {
  /**
  * A flag to enable or disable SCIM for the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#enabled ZeroTrustAccessIdentityProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates how a SCIM event updates a user identity used for policy evaluation. Use "automatic" to automatically update a user's identity and augment it with fields from the SCIM user resource. Use "reauth" to force re-authentication on group membership updates, user identity update will only occur after successful re-authentication. With "reauth" identities will not contain fields from the SCIM user resource. With "no_action" identities will not be changed by SCIM updates in any way and users will not be prompted to reauthenticate.
  * Available values: "automatic", "reauth", "no_action".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#identity_update_behavior ZeroTrustAccessIdentityProvider#identity_update_behavior}
  */
  readonly identityUpdateBehavior?: string;
  /**
  * A flag to remove a user's seat in Zero Trust when they have been deprovisioned in the Identity Provider.  This cannot be enabled unless user_deprovision is also enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#seat_deprovision ZeroTrustAccessIdentityProvider#seat_deprovision}
  */
  readonly seatDeprovision?: boolean | cdktf.IResolvable;
  /**
  * A flag to enable revoking a user's session in Access and Gateway when they have been deprovisioned in the Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#user_deprovision ZeroTrustAccessIdentityProvider#user_deprovision}
  */
  readonly userDeprovision?: boolean | cdktf.IResolvable;
}

export function zeroTrustAccessIdentityProviderScimConfigToTerraform(struct?: ZeroTrustAccessIdentityProviderScimConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    identity_update_behavior: cdktf.stringToTerraform(struct!.identityUpdateBehavior),
    seat_deprovision: cdktf.booleanToTerraform(struct!.seatDeprovision),
    user_deprovision: cdktf.booleanToTerraform(struct!.userDeprovision),
  }
}


export function zeroTrustAccessIdentityProviderScimConfigToHclTerraform(struct?: ZeroTrustAccessIdentityProviderScimConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_update_behavior: {
      value: cdktf.stringToHclTerraform(struct!.identityUpdateBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seat_deprovision: {
      value: cdktf.booleanToHclTerraform(struct!.seatDeprovision),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_deprovision: {
      value: cdktf.booleanToHclTerraform(struct!.userDeprovision),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessIdentityProviderScimConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessIdentityProviderScimConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._identityUpdateBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityUpdateBehavior = this._identityUpdateBehavior;
    }
    if (this._seatDeprovision !== undefined) {
      hasAnyValues = true;
      internalValueResult.seatDeprovision = this._seatDeprovision;
    }
    if (this._userDeprovision !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDeprovision = this._userDeprovision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessIdentityProviderScimConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._identityUpdateBehavior = undefined;
      this._seatDeprovision = undefined;
      this._userDeprovision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._identityUpdateBehavior = value.identityUpdateBehavior;
      this._seatDeprovision = value.seatDeprovision;
      this._userDeprovision = value.userDeprovision;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // identity_update_behavior - computed: true, optional: true, required: false
  private _identityUpdateBehavior?: string; 
  public get identityUpdateBehavior() {
    return this.getStringAttribute('identity_update_behavior');
  }
  public set identityUpdateBehavior(value: string) {
    this._identityUpdateBehavior = value;
  }
  public resetIdentityUpdateBehavior() {
    this._identityUpdateBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityUpdateBehaviorInput() {
    return this._identityUpdateBehavior;
  }

  // scim_base_url - computed: true, optional: false, required: false
  public get scimBaseUrl() {
    return this.getStringAttribute('scim_base_url');
  }

  // seat_deprovision - computed: true, optional: true, required: false
  private _seatDeprovision?: boolean | cdktf.IResolvable; 
  public get seatDeprovision() {
    return this.getBooleanAttribute('seat_deprovision');
  }
  public set seatDeprovision(value: boolean | cdktf.IResolvable) {
    this._seatDeprovision = value;
  }
  public resetSeatDeprovision() {
    this._seatDeprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seatDeprovisionInput() {
    return this._seatDeprovision;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // user_deprovision - computed: true, optional: true, required: false
  private _userDeprovision?: boolean | cdktf.IResolvable; 
  public get userDeprovision() {
    return this.getBooleanAttribute('user_deprovision');
  }
  public set userDeprovision(value: boolean | cdktf.IResolvable) {
    this._userDeprovision = value;
  }
  public resetUserDeprovision() {
    this._userDeprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeprovisionInput() {
    return this._userDeprovision;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider}
*/
export class ZeroTrustAccessIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessIdentityProvider to import
  * @param importFromId The id of the existing ZeroTrustAccessIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.5.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._config.internalValue = config.config;
    this._name = config.name;
    this._scimConfig.internalValue = config.scimConfig;
    this._type = config.type;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // config - computed: false, optional: false, required: true
  private _config = new ZeroTrustAccessIdentityProviderConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ZeroTrustAccessIdentityProviderConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scim_config - computed: true, optional: true, required: false
  private _scimConfig = new ZeroTrustAccessIdentityProviderScimConfigOutputReference(this, "scim_config");
  public get scimConfig() {
    return this._scimConfig;
  }
  public putScimConfig(value: ZeroTrustAccessIdentityProviderScimConfig) {
    this._scimConfig.internalValue = value;
  }
  public resetScimConfig() {
    this._scimConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimConfigInput() {
    return this._scimConfig.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      config: zeroTrustAccessIdentityProviderConfigAToTerraform(this._config.internalValue),
      name: cdktf.stringToTerraform(this._name),
      scim_config: zeroTrustAccessIdentityProviderScimConfigToTerraform(this._scimConfig.internalValue),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: zeroTrustAccessIdentityProviderConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustAccessIdentityProviderConfigA",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_config: {
        value: zeroTrustAccessIdentityProviderScimConfigToHclTerraform(this._scimConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustAccessIdentityProviderScimConfig",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
